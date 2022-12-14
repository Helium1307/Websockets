const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const http = require("http");

const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));

const ServerHttp = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

const io = new Server(ServerHttp);

module.exports = { ServerHttp, io };
