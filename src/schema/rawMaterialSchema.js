const Joi = require("Joi");

const id = Joi.number().integer().positive().max(2147483647);
const name = Joi.string().max(100);
const code = Joi.string().max(12).alphanum();

const checkId = Joi.object({
  id: id.required(),
});

const newRawMaterialSchema = Joi.object({
  code: code,
  name: name.required(),
});

const updateRawMaterialSchema = Joi.object({
  code: code,
  name: name.required(),
});

module.exports = {
  checkId,
  newRawMaterialSchema,
  updateRawMaterialSchema,
};