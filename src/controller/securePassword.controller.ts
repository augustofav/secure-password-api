import { Request, Response } from "express";
import {
  SecurePasswordService,
  validationErrors,
} from "../service/securePassword.service";

class SecurePasswordController {
  async handlePassword(req: Request, res: Response) {
    const securePasswordService = new SecurePasswordService();

    const { password } = req.body;

    const securedPassword = await securePasswordService.executePassword({
      password,
    });

    if (validationErrors.length >= 1) {
      return res.status(400).json({ password: securedPassword });
    }

    res.status(204).json({ password: securedPassword });
  }
}

export { SecurePasswordController };
