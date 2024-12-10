// @ts-nocheck

import type { TODO } from "@evie-ui/types";
import { createContext, useContext, useEffect, useState } from "react";

export type FieldValidatorWithRequired<Data, FieldName extends keyof Data> = {
  [key: string]:
    | ((value: Data[FieldName]) => boolean | undefined)
    | ((value: Data[FieldName]) => Promise<boolean | undefined>);
};

export type FieldValidatorWithoutRequired<
  Data,
  FieldName extends keyof Data,
> = {
  [key: string]:
    | ((value: Data[FieldName] | undefined) => boolean | undefined)
    | ((value: Data[FieldName] | undefined) => Promise<boolean | undefined>);
};

export type FieldValidator<
  Data,
  FieldName extends keyof Data,
> = Data[FieldName] extends undefined
  ? FieldValidatorWithoutRequired<Data, FieldName>
  : FieldValidatorWithRequired<Data, FieldName>;

export type FieldValidators<Data> = {
  [FieldName in keyof Data]: FieldValidator<Data, FieldName>;
};

export type CreateFormProps<Data> = {
  defaultValues?: Partial<Data>;
  validators?: Partial<FieldValidators<Data>>;
};

export type FormValidationFieldProps<
  Data extends Record<string, unknown>,
  Name extends keyof Data,
> = {
  name: Extract<Name, string>;
  children: (props: {
    value: Data[Name] extends undefined ? Data[Name] | undefined : Data[Name];
    validating: boolean;
    error?: string;
    onChange: (
      value: Data[Name] extends undefined ? Data[Name] | undefined : Data[Name]
    ) => void;
  }) => React.ReactNode;
};

export type FormValidationSubmitProps<Data> = {
  children: (props: {
    form: FormValidationState;
    fields: Fields<Data>;
    submit: () => void;
  }) => React.ReactNode;
};

export type Fields<Data> = {
  [FieldName in keyof Data]: Field<Data, FieldName>;
};

export type Field<Data, FieldName extends keyof Data> = {
  value: Data[FieldName];
  dirty: boolean;
  validating: boolean;
  invalid: boolean;
  error: string | undefined;
};

export type OnSubmitProps<Data> = {
  data: Data;
  setError: (field: keyof Data, error: string) => void;
};

export type FormValidationContextProps<Data> = {
  form: FormValidationState;
  fields: Fields<Data>;
  submit: () => void;
  onChange: <Name extends keyof Data>(
    name: Name,
    value: Data[Name] extends undefined ? Data[Name] | undefined : Data[Name]
  ) => void;
};

export type FormValidationState = {
  dirty: boolean;
  invalid: boolean;
  validating: boolean;
  submitting: boolean;
};

export type FormValidationProviderProps<Data> = {
  defaultValues: Data;
  onSubmit: (props: OnSubmitProps<Data>) => Promise<void>;
  children: React.ReactNode;
};

const FormValidationInternalContext = createContext<{
  subscribe: (name: string) => void;
  unsubscribe: (name: string) => void;
}>({ subscribe: () => {}, unsubscribe: () => {} });

const FormValidationContext = createContext<FormValidationContextProps<TODO>>({
  form: {
    invalid: false,
    validating: false,
    dirty: false,
    submitting: false,
  },

  fields: {},
  onChange: () => {},
  submit: () => Promise.resolve(),
});

export const createFormValidation = <Data extends Record<string, unknown>>(
  createFormProps: CreateFormProps<Data>
) => {
  const FormValidationProvider = (
    providerProps: FormValidationProviderProps<Data>
  ) => {
    const [fields, setFields] = useState<Partial<Fields<Data>>>({});

    const onChange = async <Name extends keyof Data>(
      name: Name,
      value: Data[Name] | undefined
    ) => {
      setFields((fields) => ({
        ...fields,
        [name]: {
          ...fields[name as string],
          value,
          validating: true,
          dirty: value !== providerProps.defaultValues?.[name as string],
        },
      }));

      let error: string | undefined = undefined;

      const validators = (createFormProps.validators?.[name] ??
        {}) as FieldValidator<Data, Name>;
      for await (const [key, validator] of Object.entries(validators)) {
        const result = await validator(value as Data[Name]);
        if (result) continue;

        error = key;
        break;
      }

      setFields((fields) => ({
        ...fields,
        [name]: {
          ...fields[name as string],
          error,
          invalid: error !== undefined,
          validating: false,
        },
      }));
    };

    const subscribe = <Name extends keyof Data>(name: Name) => {
      setFields((fields) => {
        if (!fields[name]) {
          fields[name] = {
            value: providerProps.defaultValues?.[name] as Data[Name],
            error: undefined,
            validating: false,
            invalid: false,
            dirty: false,
          };
        }

        return fields;
      });
    };

    const unsubscribe = <Name extends keyof Data>(name: Name) => {};

    const form = {
      invalid: Object.values(fields).some((field) => field.invalid),
      validating: Object.values(fields).some((field) => field.validating),
      dirty: Object.values(fields).some((field) => field.dirty),
      submitting: false,
    };

    return (
      <FormValidationInternalContext.Provider
        value={{ subscribe, unsubscribe }}
      >
        <FormValidationContext.Provider
          value={{ submit: () => {}, fields, onChange, form }}
        >
          {providerProps.children}
        </FormValidationContext.Provider>
      </FormValidationInternalContext.Provider>
    );
  };

  const FormValidationField = <Name extends keyof Data>(
    props: FormValidationFieldProps<Data, Name>
  ) => {
    const { fields, onChange } = useContext(FormValidationContext);
    const { subscribe, unsubscribe } = useContext(
      FormValidationInternalContext
    );

    useEffect(() => {
      subscribe(props.name);
      return () => unsubscribe(props.name);
    }, [props.name, subscribe, unsubscribe]);

    const field = fields[props.name];
    if (!field) return null;

    return props.children({
      value: field.value,
      error: field.error,
      validating: field.validating,
      onChange: (value) => onChange(props.name, value),
    });
  };

  return {
    FormValidationProvider,
    FormValidationField,
    FormValidationSubmit,
    useFormValidation,
  };
};

const useFormValidation = () => useContext(FormValidationContext);

const FormValidationSubmit = <Data,>(
  props: FormValidationSubmitProps<Data>
) => {
  const { fields, form, submit } = useFormValidation();
  return props.children({ form, fields, submit });
};
