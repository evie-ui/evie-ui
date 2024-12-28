import { Page } from "@evie-ui/components/page";
import { Section } from "@evie-ui/components/section";
import { Separator } from "@evie-ui/components/separator";
import { Stepper } from "@evie-ui/components/stepper";
import { Text } from "@evie-ui/components/text";
import { View } from "@evie-ui/components/view";
import { useState } from "react";

export default function StepperExample() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Stepper</Page.Title>
      </Page.Header>

      <Page.Content>
        <Section.Root>
          <Section.Header>
            <Section.Title>step 10</Section.Title>
          </Section.Header>

          <Section.Content>
            <Stepper.Root value={value1} onValueChange={setValue1} step={10}>
              <Stepper.Negative bgColor="primary">
                <Text>-</Text>
              </Stepper.Negative>

              <View flex={1}>
                <Stepper.Value />
              </View>

              <Stepper.Positive bgColor="primary">
                <Text>+</Text>
              </Stepper.Positive>
            </Stepper.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>min 2</Section.Title>
          </Section.Header>

          <Section.Content>
            <Stepper.Root value={value2} onValueChange={setValue2} min={2}>
              <Stepper.Negative bgColor="primary">
                <Text>-</Text>
              </Stepper.Negative>

              <View flex={1}>
                <Stepper.Value />
              </View>

              <Stepper.Positive bgColor="primary">
                <Text>+</Text>
              </Stepper.Positive>
            </Stepper.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>max 10</Section.Title>
          </Section.Header>

          <Section.Content>
            <Stepper.Root value={value3} onValueChange={setValue3} max={10}>
              <Stepper.Negative bgColor="primary">
                <Text>-</Text>
              </Stepper.Negative>

              <View flex={1}>
                <Stepper.Value />
              </View>

              <Stepper.Positive bgColor="primary">
                <Text>+</Text>
              </Stepper.Positive>
            </Stepper.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>min 2, max 10</Section.Title>
          </Section.Header>

          <Section.Content>
            <Stepper.Root
              value={value4}
              onValueChange={setValue4}
              min={2}
              max={10}
            >
              <Stepper.Negative bgColor="primary">
                <Text>-</Text>
              </Stepper.Negative>

              <View flex={1}>
                <Stepper.Value />
              </View>

              <Stepper.Positive bgColor="primary">
                <Text>+</Text>
              </Stepper.Positive>
            </Stepper.Root>
          </Section.Content>
        </Section.Root>

        <Separator />

        <Section.Root>
          <Section.Header>
            <Section.Title>min -2, max 2</Section.Title>
          </Section.Header>

          <Section.Content>
            <Stepper.Root
              value={value5}
              onValueChange={setValue5}
              min={-2}
              max={2}
            >
              <Stepper.Negative bgColor="primary">
                <Text>-</Text>
              </Stepper.Negative>

              <View flex={1}>
                <Stepper.Value />
              </View>

              <Stepper.Positive bgColor="primary">
                <Text>+</Text>
              </Stepper.Positive>
            </Stepper.Root>
          </Section.Content>
        </Section.Root>
      </Page.Content>
    </Page.Root>
  );
}
