// const cv = require('opencv4nodejs');
// const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001"
  }
});

const SERVER_PORT = 3000;

//const wCap = new cv.VideoCapture(0);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// setInterval(() => {
//     const frame = wCap.read();
//     const image = cv.imencode('.jpg', frame).toString('base64');
//     io.emit('image', image);
// }, 1000)

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

server.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});