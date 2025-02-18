const Task = require("../models/task");
const TaskComment = require("../models/taskCommentSchema");

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

exports.getTaskById = async (req, res) => {
  const { taskId } = req.params;
  let tasks = await Task.findById(taskId)
    .populate("assignedBy", "name")
    .populate("assignTo", "name");
  let status = await TaskComment.find({ task: taskId });
  console.log("Status: ", status);

  return res.json({ tasks, status });
};
