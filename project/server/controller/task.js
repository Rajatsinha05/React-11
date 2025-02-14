const Task = require("../models/task");

exports.create = async (req, res) => {
  req.body.assignedBy = req.user.id;
  let task = await Task.create(req.body);
  res.send(task);
};

exports.getAllTask = async (req, res) => {
  let query = req.query || {};
  let task = await Task.find(query)
    .populate("assignedBy", "name")
    .populate("assignTo", "name");
  return res.send(task);
};
