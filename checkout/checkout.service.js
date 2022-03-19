const db = require("_helpers/db");

module.exports = {
  create,
  get,
  update,
  delete: _delete,
};

async function create(params) {
  const checkout = new db.Checkout(params);
  await checkout.save();
  return checkout;
}

async function get(id) {
  const checkout = await getService(id);
  return checkout;
}

async function update(id, params) {
  const checkout = await getService(id);
  Object.assign(checkout, params);
  checkout.updated = Date.now();
  await checkout.save();
  return checkout;
}

async function _delete(id) {
  const checkout = await getService(id);
  await checkout.remove();
}
// helper functions

async function getService(id) {
  if (!db.isValidId(id)) throw "Checkout data not found";
  const checkout = await db.Checkout.findById(id);
  if (!checkout) throw "Checkout data not found";
  return checkout;
}
