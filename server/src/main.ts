/**
 * Some predefined delays (in milliseconds).
 */
import { createServer } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Socket } from 'socket.io';

const app = express();
const server = createServer(app);
const io = socketIo(server);

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3001, () => {
  console.log('listening on *:3000');
});
