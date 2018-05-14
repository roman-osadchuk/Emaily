const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
// ===
require('./routes/authRoutes')(app);


// localhost:5000/auth/google


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Running on localhost:" + PORT));