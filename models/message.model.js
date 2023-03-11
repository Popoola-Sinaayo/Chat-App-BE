const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  message: String,
  users: [String],
  id: mongoose.SchemaTypes.ObjectId,
  date: {
    type: Date,
    default: new Date(),
  },
});

const Messages = mongoose.model("Message", messageSchema);

module.exports = Messages;
