type StatusCode = number;

export class BaseError extends Error {
  statusCode: StatusCode = 500;
}

export class UnauthenticatedError extends BaseError {
  constructor() {
    super("Você não está autenticado");
    this.name = "UnauthenticatedError";
    this.statusCode = 401;
  }
}

export class UserNotFoundError extends BaseError {
  constructor() {
    super("Usuário não encontrado");
    this.name = "UserNotFoundError";
    this.statusCode = 404;
  }
}

export class WrongPasswordError extends BaseError {
  constructor() {
    super("Senha incorreta");
    this.name = "WrongPasswordError";
    this.statusCode = 401;
  }
}

export class WithoutPermissionError extends BaseError {
  requiredPermissions: string[][];

  constructor(props: { requiredPermissions: string[][] }) {
    super("Você não possui permissão para acessar este recurso");
    this.name = "WithoutPermissionError";
    this.statusCode = 403;
    this.requiredPermissions = props.requiredPermissions;
  }
}

export class TimeoutError extends BaseError {
  constructor() {
    super("Request timed out");
    this.name = "TimeoutError";
    this.statusCode = 408;
  }
}

export class PayloadError<T extends Record<string, unknown>> extends BaseError {
  payload: T;

  constructor(message: string, payload: T) {
    super(message);
    this.name = "PayloadError";
    this.payload = payload;
  }
}

export class SuspenseError extends Error {
  retry: () => void;
  error: unknown;

  constructor(error: Error, retry: () => void) {
    super(error.message);
    this.name = "SuspenseError";
    this.retry = retry;
    this.error = error;
  }
}

export class NoPasskeysFoundOnAccountError extends BaseError {
  constructor() {
    super("Nenhuma chave de acesso encontrada na conta");
    this.name = "NoPasskeysFoundOnAccountError";
    this.statusCode = 401;
  }
}

export class NoPasskeysFoundOnDeviceError extends BaseError {
  constructor() {
    super("Nenhuma chave de acesso encontrada no dispositivo");
    this.name = "NoPasskeysFoundOnDeviceError";
    this.statusCode = 401;
  }
}
