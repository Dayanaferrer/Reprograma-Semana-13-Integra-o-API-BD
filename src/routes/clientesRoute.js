const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

router.get("/", controller.getAll);
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getByCpf);

router.post("/", controller.postCliente);

module.exports = router