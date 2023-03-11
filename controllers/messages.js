const Messages = require("../models/message.model");

const postMessage = (req, res, next) => {
  const { sender, receiver, message } = req.body;
  Messages.create({
    sender: sender,
    receiver: receiver,
    message: message,
    users: [sender, receiver],
    time: new Date(),
  }).then((data) => {
    Messages.find({}).then((messages) => {
      const filteredMessages = messages.filter((data) => {
        return (
          data.users.findIndex((data) => data === receiver) !== -1 &&
          data.users.findIndex((data) => data === sender) !== -1 &&
          data.users.findIndex((data) => data === receiver) !==
            data.users.findIndex((data) => data === sender)
        );
      });
      return res.json({ message: filteredMessages });
    });
  });
};

const getMessages = (req, res, next) => {
  const { sender, receiver } = req.body;
  Messages.find({}).then((messages) => {
    const filteredMessages = messages.filter((data) => {
      return (
        data.users.findIndex((data) => data === receiver) !== -1 &&
        data.users.findIndex((data) => data === sender) !== -1 &&
        data.users.findIndex((data) => data === receiver) !==
          data.users.findIndex((data) => data === sender)
      );
    });
    return res.json({ message: filteredMessages });
  });
};

module.exports = { getMessages, postMessage };
