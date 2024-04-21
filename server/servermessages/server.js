const mongoose = require('mongoose');

// MongoDB connection string
const connectionString = 'mongodb+srv://admin:admin@exampremcluster.sbjc7bi.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // optional, but recommended
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});
