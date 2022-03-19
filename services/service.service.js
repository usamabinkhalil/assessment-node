const db = require("_helpers/db");

module.exports = {
  create,
  getAll,
  get,
  getBySlug,
  update,
  delete: _delete,
};

async function create(params) {
  const service = new db.Service(params);
  await service.save();
  return service;
}

async function getAll() {
  const service = await getFilteredServices({});
  return service;
}

async function get(id) {
  const service = await getService(id);
  return service;
}

async function getBySlug(slug) {
  const service = await getServiceBySlug(slug);
  return service;
}

async function update(id, params) {
  const service = await getService(id);
  Object.assign(service, params);
  service.updated = Date.now();
  await service.save();
  return service;
}

async function _delete(id) {
  const service = await getService(id);
  await service.remove();
}
// helper functions

async function getService(id) {
  if (!db.isValidId(id)) throw "Service not found";
  const service = await db.Service.findById(id);
  if (!service) throw "Service not found";
  return service;
}

async function getServiceBySlug(slug) {
  const service = await db.Service.findOne({ slug }).exec();
  if (!service) throw "Service not found";
  return service;
}

async function getFilteredServices(query) {
  const service = await db.Service.find(query);
  return service;
}
