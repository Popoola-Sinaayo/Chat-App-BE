const express = require("express");
const userController = require("../controllers/user");
const messageController = require("../controllers/messages")
const route = express.Router();

route.get("/users", userController.allUsers);
route.post("/signup", userController.signUp);
route.post("/signin", userController.signIn);
route.post("/post-messages", messageController.postMessage)
route.post("/get-messages", messageController.getMessages)

module.exports = route;
