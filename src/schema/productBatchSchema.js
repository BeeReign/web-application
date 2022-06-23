const Joi = require("joi");

const id = Joi.number().unsafe().min(1).max(9223372036854775807);
const productId = Joi.number().integer().positive().max(2147483647);
const warehouseId = Joi.number().integer().positive().max(32767);
const entryDate = Joi.date();
const expirationDate = Joi.date().allow(null);
const quantity = Joi.number().integer().positive();
const stock = Joi.number().integer().min(0);
const unitCost = Joi.number().positive();
const batches = Joi.array();

const checkId = Joi.object({
  id: id.required(),
});

const createSchema = Joi.object({
  productId: productId.required(),
  warehouseId: warehouseId.required(),
  entryDate: entryDate.required(),
  expirationDate,
  quantity: quantity.required(),
  unitCost: unitCost.required(),
  batches: batches.required(),
}).options({ abortEarly: false });

const updateSchema = Joi.object({
  productId: productId.required(),
  warehouseId: warehouseId.required(),
  entryDate: entryDate.required(),
  expirationDate,
  quantity: quantity.required(),
  unitCost: unitCost.required(),
  stock: stock.required(),
}).options({ abortEarly: false });

module.exports = {
  checkId,
  createSchema,
  updateSchema,
};
