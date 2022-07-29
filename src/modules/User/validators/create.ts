import { validate, Joi } from "express-validation";

const createValidator = validate({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    balance: Joi.number().required(),
    extract: {
      accountNumber: Joi.string().required(),
      credit: Joi.number().required(),
      debit: Joi.number().required(),
    },
  }),
});

export default createValidator;
