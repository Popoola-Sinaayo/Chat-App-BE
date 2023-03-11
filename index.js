const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/route");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
app.use(express.json());
app.use(cors());

// const io = require("socket.io")(http)

app.use("", route);

const server = app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
mongoose
  .connect(
    "mongodb+srv://Popoola:prayer1020@cluster0.mbbmo7d.mongodb.net/chat?retryWrites=true&w=majority"
  )
  .then((result) => {
    server;
    console.log("done");
  })
  .catch((err) => {
    console.log(err);
  });

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  socket.on("newMessage", (data) => {
    console.log(data);
    socket.broadcast.emit("newMessageAsync", data);
  });
});
