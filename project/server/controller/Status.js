const TaskComment = require("../models/taskCommentSchema");

const statusController = {
  create: async (req, res) => {
    req.body.user = req.user.id;
    let status = await TaskComment.create(req.body);
    return res.send(status);
  },

};

module.exports =statusController;
