import { Router } from "express";
import { SecurePasswordController } from "../controller/securePassword.controller";
import { createValidator } from "express-joi-validation";
import { securePasswordSchema } from "../domains/schemas/securePassword.schema";

const passwordRoutes: Router = Router();
const validator = createValidator();

passwordRoutes.post(
  "/api/v1/securepassword",
  validator.body(securePasswordSchema),
  new SecurePasswordController().handlePassword
);

export default passwordRoutes;
