const express = require("express");
const router = express.Router();
const {getAllContacts, createContact, updateContact, getContact, deleteContact, getListByIntern, getDatabyPhoneno } = require("../controllers/contactController");
const validateToken = require("../middleware/authentication");

router.use(validateToken);
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").put(updateContact).get(getContact).delete(deleteContact);
router.route("/phoneno/:phone").get(getDatabyPhoneno)
router.route("/intern/:intern").get(getListByIntern)


module.exports = router;