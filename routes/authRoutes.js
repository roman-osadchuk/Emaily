const passport = require('passport');

module.exports = app => {
  
  app.get('/', (err, req, res) => {
      res.json({ "greeting": "hello"});
    }
  );
  
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );


  app.get('/auth/google/callback', passport.authenticate('google'));
  
  
  // app.get('/auth/google/callback', passport.authenticate('google'), // complete the authenticate using the google strategy
  //   (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
  //     if (err.name === 'TokenError') {
  //      res.redirect('/auth/google'); // redirect them back to the login page
  //     } else {
  //      // Handle other errors here
  //     }
  //   },
  //   (req, res) => { // On success, redirect back to '/'
  //     res.redirect('/');
  //   }
  // );
  
  
  
};

