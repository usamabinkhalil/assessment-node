const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const service = require("./checkout.service");

router.post("/", create);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function create(req, res, next) {
  service
    .create(req.body)
    .then((account) => res.json(account))
    .catch(next);
}

function get(req, res, next) {
  service
    .get(req.params.id)
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
