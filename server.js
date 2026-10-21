const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('TaskFlow Server is Running');
});

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('moveTask', (taskData) => {
    io.emit('taskMoved', taskData);
  });
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});
