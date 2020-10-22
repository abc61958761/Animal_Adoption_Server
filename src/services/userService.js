import Boom from '@hapi/boom';

import User from '../models/user';

/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllUsers() {
  return User.find();
}

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {
  return User.findById(id)
    .then((user) => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

/**
 * Create new user.
 *
 * @param   {Object}  user
 * @returns {Promise}
 */
export function createUser(user) {
  return new User(user).save();
}

/**
 * Update a user.
 *
 * @param   {Number|String}  id
 * @param   {Object}         user
 * @returns {Promise}
 */
export function updateUser(id, user) {
  return User.findByIdAndUpdate({ _id: id }, { name: user.name }, { new: true });
}

/**
 * Delete a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then((user) => user.destroy());
}
