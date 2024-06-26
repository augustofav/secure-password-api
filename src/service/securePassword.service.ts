import { PasswordRequest } from "../domains/model/Password";

export const validationErrors: string[] = [];

class SecurePasswordService {
  async executePassword({ password }: PasswordRequest) {
    validationErrors.length = 0;

    if (password.length < 8) {
      validationErrors.push("A senha deve possuir pelo menos 08 caracteres.");
    }

    if (!password.match(/[A-Z]/)) {
      validationErrors.push(
        "A senha deve possuir pelo menos uma letra maiúscula."
      );
    }

    if (!password.match(/[a-z]/)) {
      validationErrors.push(
        "A senha deve possuir pelo menos uma letra minúscula."
      );
    }

    if (!password.match(/[0-9]/)) {
      validationErrors.push(
        "A senha deve possuir pelo menos um dígito númerico."
      );
    }

    if (!password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
      validationErrors.push(
        "A senha deve possuir pelo menos um caractere especial (e.g, !@#$%)."
      );
    }

    if (validationErrors.length >= 1) {
      return validationErrors;
    }

    return password;
  }
}

export { SecurePasswordService };
