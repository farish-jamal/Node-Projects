const User = require("../models/user.models");

async function handleGetAllUsers(req, res) {
  const allUser = await User.find({});
  return res.json(allUser);
}

async function handleFindById(req, res) {
  const result = await User.findById(req.params.id);
  return res.status(200).json(result);
}

async function handleFindByIdAndUpdate(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    last_name: "Changed",
    job_profile: "New Job Title",
  });
  return res.status(200).json(user);
}

async function handleFindByIdAndDelete(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ msg: "Deleted" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.email,
    job_profile: body.job_profile,
  });
  return res.status(201).json({ msg: "sucess" });
}

module.exports = {
  handleGetAllUsers,
  handleFindById,
  handleFindByIdAndUpdate,
  handleFindByIdAndDelete,
  handleCreateNewUser,
};
