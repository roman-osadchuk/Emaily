const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const favicon = require('serve-favicon');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();



app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
// ===
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production') {

  //serving favicon in production
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
  // Express will serve up production assets
  app.use(express.static('client/build'));

  //Express will serve up index.html file if recognize the file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// localhost:5000/auth/google


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Running on localhost:" + PORT));
