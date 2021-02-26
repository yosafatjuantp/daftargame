const express = require("express")
const router = express.Router()
const gameController = require("../controller/gameController")

router.get("/", gameController.index)
router.get("/create", gameController.create)
router.post("/", gameController.store)
router.get("/:id/edit", gameController.edit)
router.delete("/:id", gameController.destroy)

module.exports = router
