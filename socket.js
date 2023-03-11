const server = require("./index")
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
let socketFunctionExport;
io.on("connection", (socket) => {
  socket.emit("newMessage", "welcome");
  function socketFunction(username) {
    socket.emit("newMessage", username);
  }
  socketFunctionExport = socketFunction;
});

module.exports = { socketFunctionExport };
