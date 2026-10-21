module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Join a specific project room
    socket.on('joinProject', (projectId) => {
      socket.join(projectId);
    });

    // Handle real-time task drag and drop
    socket.on('taskMoved', (data) => {
      // Broadcast to everyone else in the same project room
      socket.to(data.projectId).emit('taskUpdated', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};
