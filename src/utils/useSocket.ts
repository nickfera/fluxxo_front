import { io, Socket } from "socket.io-client";

const useSocket = () => {
  let socket: Socket;

  const instatiate = (establishmentId: number) => {
    socket = io('localhost:3001', {
      transports: ['websocket'],
      auth: {
        token: `Bearer ${localStorage.getItem('fluxxo_token')}`
      },
      query: {
        establishmentId,
      }
    });

    socket.on('connect', () => {
      console.log(`connected ${socket.id}`)
    });
  
    socket.on('disconnect', () => {
      console.log(`disconnected`);
    });
  
    socket.on('update', (data) => {
      console.log('update', data);
    });
  };

  const setEntrance = (entranceId: number) => {
    console.log('setting entrance');

    if (!socket) return;

    socket.emit('setEntrance', { entranceId });
  };

  const add = () => {
    console.log('adding to counter...');

    if (!socket) return;

    socket.emit('add');
  };

  const subtract = () => {
    console.log('subtracting to counter...');

    if (!socket) return;

    socket.emit('subtract');
  };


  return { instatiate, setEntrance, add, subtract };
};

export default useSocket;