import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  const handleSendClick = () => {
    socket.emit('message', 'Hello Server!');
  };

  return (
    <>
      <div>
        <h1>Socket.io</h1>
        <p>Connection status: {isConnected ? 'Connected' : 'Disconnected'}</p>
        <button onClick={handleSendClick}>Send</button>
      </div>
    </>
  );
}

export default App;



