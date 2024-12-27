const mongoose  = require('mongoose');

//define mongodb connection url
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
//mongoose.connect('mongodb://127.0.0.1:27017/your_database');

//setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//mongoose.connect('mongodb://localhost:27017/mydatabase');

//get the default connection
//mongoose maintains the default connection  object representing the mongodb connection
const db = mongoose.connection;

//define event listeners for database connections
db.on('connected', () => {
    console.log('Connected to mongodb server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

//export the database conection
module.exports = db;