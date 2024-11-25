import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { config } from 'dotenv';

const app = express();
app.use(cors());
config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const users = {};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('connect_error', (err) => {
    console.error("Socket connection error:", err);
  });

  socket.on('join-room', (userId) => {
    users[socket.id] = userId;
    socket.broadcast.emit('user-connected', userId);
  });

  socket.on('offer', ({ target, caller, signal }) => {
    io.to(target).emit('offer', { caller, signal });
  });

  socket.on('answer', ({ target, caller, signal }) => {
    io.to(target).emit('answer', { caller, signal });
  });

  socket.on('start-sharing', (userId) => {
    socket.broadcast.emit('user-started-sharing', userId);
  });

  socket.on('stop-sharing', (userId) => {
    socket.broadcast.emit('user-stopped-sharing', userId);
  });

  socket.on('disconnect', () => {
    const userId = users[socket.id];
    delete users[socket.id];
    socket.broadcast.emit('user-disconnected', userId);
  });

 
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});