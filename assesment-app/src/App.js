// Front-end code
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      const { message, username } = data;
      setMessages((prevMessages) => [...prevMessages, { message, username }]);
    });

    socket.on('userJoined', (user) => {
      console.log(`${user.username} joined the chat`);
      // Update the UI or perform other actions
    });

    socket.on('connectedUsers', (users) => {
      console.log('Currently connected users:', users);
      setUsers(users);
      // Update the UI or perform other actions
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const data = { message, username: 'YourUsername' };
    socket.emit('sendMessage', data);
    setMessage('');
  };

  return (
    <div>
      <h1>Welcome to the Chat App!</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {messages.map((messageObj, index) => (
          <p key={index}>
            {messageObj.username}: {messageObj.message}
          </p>
        ))}
      </div>
      <div>
        <h3>Connected Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
