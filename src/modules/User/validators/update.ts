import { validate, Joi } from "express-validation";

const updateValidator = validate({
  body: Joi.object({
    balance: Joi.number().required(),
    credit: Joi.number().required(),
    debit: Joi.number().required(),
  }),
});

export default updateValidator;
