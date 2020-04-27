const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const books = require('./routes/api/books');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoUri;

// Connect to Mongo DB using Mongoose
mongoose.connect(db, {useUnifiedTopology:true, useNewUrlParser:true})
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

// Use routes
app.use('/api/books', books);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));