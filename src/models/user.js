/**
 * User model.
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String
  }
});

const Users = mongoose.model('User', user);

export default Users;
