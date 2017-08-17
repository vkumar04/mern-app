const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
// clientID 1026024051176-ig1flkc05tab9jq1st7l8i0l706sf1nv.apps.googleusercontent.com
// clientSecret f55FVh686iiIFn4C_8plI4_g

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = 5000
app.listen(process.env.PORT || 5000);