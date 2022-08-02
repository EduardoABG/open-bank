import { validate, Joi } from "express-validation";

const loginValidator = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

export default loginValidator;
