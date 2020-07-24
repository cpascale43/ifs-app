const express = require("express");
// controller
const fsController = require("../controllers/fs");
// middlewares

const router = express.Router();

router
    .get("/:path", fsController.onGetPath)
    .delete("/:path", fsController.onDeletePath)
    .put("/:path", fsController.moveFile);


module.exports = router