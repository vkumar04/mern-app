const mongoose = require('mongoose');
const {Scheme} = mongoose;

const userSchema = new userSchema({
  googleId: String
});

mongoose.model('users', userSchema);