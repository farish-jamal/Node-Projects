const express = require("express");
const {
  handleGetAllUsers,
  handleFindById,
  handleFindByIdAndUpdate,
  handleFindByIdAndDelete,
  handleCreateNewUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleFindById)
  .patch(handleFindByIdAndUpdate)
  .delete(handleFindByIdAndDelete);

module.exports = router;
