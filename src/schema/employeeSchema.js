import Joi from "joi";

const id = Joi.number().unsafe().max(9223372036854775807);
const name = Joi.string().max(20);
const lastName = Joi.string().max(20);
const cellPhone = Joi.string().max(20).allow("");
const email = Joi.string()
  .max(256)
  .email({ tlds: { allow: false } });
const password = Joi.string().max(60).min(8);
const repeat_password = Joi.equal(Joi.ref("password"));
const typeOfEmployeeId = Joi.number().integer().positive().max(32767).messages({
  "number.base": `"type of employee" required`,
});

const loginEmployeeSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const emailSchema = Joi.object({
  email: email.required(),
});

const passwordResetSchema = Joi.object({
  password: password.required(),
  repeat_password: repeat_password.required(),
});

const newEmployeeSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  cellPhone,
  email: email.required(),
  password: password.required(),
  typeOfEmployeeId: typeOfEmployeeId.required(),
}).options({ abortEarly: false });

const updateProfileSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  cellPhone: cellPhone,
  typeOfEmployeeId: typeOfEmployeeId.required(),
}).options({ abortEarly: false });

const updateLoginSchema = Joi.object({
  email: email.required(),
  password: password.required(),
}).options({ abortEarly: false });

export {
  loginEmployeeSchema,
  newEmployeeSchema,
  updateProfileSchema,
  updateLoginSchema,
  emailSchema,
  passwordResetSchema,
};
