const express = require('express');
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models");
const { contacts: ctrl } = require("../../controllers");


const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll)); 

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.add));  

router.put("/:contactId", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));


module.exports = router;
