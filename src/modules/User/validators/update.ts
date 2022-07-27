import { validate, Joi } from "express-validation";

const updateValidator = validate({
  body: Joi.object(),
});

export default updateValidator;
