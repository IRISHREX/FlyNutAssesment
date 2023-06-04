// Back-end code
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');

// Set up Express app
const app = express();
app.use(express.json());

// Set up MongoDB connection
mongoose.connect('mongodb+srv://soheljavadeveloper:OI7mFQqTq7yxlnTb@chatapp.f3idrvt.mongodb.net/chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});

// Define User model
// 1) use Passport.js for User creation and authentication
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
}));

// Set up passport authentication
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username })
    .then(user => {
      if (!user) return done(null, false);
      if (user.password !== password) return done(null, false);
      return done(null, user);
    })
    .catch(err => done(err));
}));

// Middleware to authenticate JWT token
// 2) Add middleware for Token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'SOHEL', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Set up socket.io
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const connectedUsers = {}; // Object to store connected users

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('newUser', (user) => {
    // Store the user's information
    connectedUsers[socket.id] = user;

    // Notify other users about the new user
    socket.broadcast.emit('userJoined', user);

    // Send the list of currently connected users to the new user
    socket.emit('connectedUsers', Object.values(connectedUsers));
  });

  socket.on('sendMessage', (data) => {
    const { message, username } = data;
    console.log('Received message:', message);

    // Broadcast the message and the sender's username to all connected users
    io.emit('message', { message, username });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');

    // Remove the user from the connected users list
    delete connectedUsers[socket.id];
  });
});

// Set up CORS middleware
app.use(cors());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// 7) Add indexing for Schema's
// Example: UserSchema.index({ username: 1 }); // Add an index to the username field of User schema
