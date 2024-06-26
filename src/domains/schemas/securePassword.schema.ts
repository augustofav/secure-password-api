import * as Joi from "joi";

export const securePasswordSchema = Joi.object({
  password: Joi.string().required(),
});
