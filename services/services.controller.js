const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const service = require("./service.service");

router.post("/", createSchema, create);
router.get("/", getAll);
router.get("/:id", get);
router.get("/by-slug/:slug", getBySlug);
router.put("/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

function createSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string(),
    tiers: Joi.array(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().empty(""),
    slug: Joi.string().empty(""),
    description: Joi.string(),
    tiers: Joi.array(),
  });
  validateRequest(req, next, schema);
}

function create(req, res, next) {
  service
    .create(req.body)
    .then((account) => res.json(account))
    .catch(next);
}

function getAll(req, res, next) {
  service
    .getAll()
    .then((account) => res.json(account))
    .catch(next);
}

function get(req, res, next) {
  service
    .get(req.params.id)
    .then((account) => res.json(account))
    .catch(next);
}

function getBySlug(req, res, next) {
  service
    .getBySlug(req.params.slug)
    .then((account) => res.json(account))
    .catch(next);
}

function update(req, res, next) {
  service
    .update(req.params.id, req.body)
    .then((account) => res.json(account))
    .catch(next);
}

function _delete(req, res, next) {
  service
    .delete(req.params.id)
    .then(() => res.json({ message: "Account deleted successfully" }))
    .catch(next);
}
