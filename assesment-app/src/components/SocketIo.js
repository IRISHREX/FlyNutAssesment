import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SocketIo = () => {
  useEffect(() => {
    const socket = io('http://localhost:4000'); // Replace with your server URL

    socket.on('connect', () => {
      console.log('Connected to the server.');
    });

    // Listen for messages from server
    socket.on('message', (data) => {
      console.log('Received message from server:', data);
    });

    // Emit message to server
    socket.emit('clientMessage', 'Hello from the client!');

    // Listen for random messages from server
    socket.on('randomMessage', (data) => {
      console.log('Received random message:', data);
    });

    // Disconnect event
    socket.on('disconnect', () => {
      console.log('Disconnected from the server.');
    });

    return () => {
      socket.disconnect(); // Clean up on component unmount
    };
  }, []);

  return (
    <h1>Socket.io Client Example</h1>
  );
};

export default SocketIo;
