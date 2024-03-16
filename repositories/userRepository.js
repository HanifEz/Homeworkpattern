const { User } = require("../models");

class UserRepository {
  // get all users
  static findAll = async (params) => {
    try {
      const users = await User.findAll({ ...params, order: [["id", "ASC"]] });
      return users;
    } catch (err) {
      throw err;
    }
  };

  // get a user by id
  static findOne = async (params) => {
    try {
      const user = await User.findOne(params);
      if (!user) {
        throw { name: "errorNotFound", message: "User not found" };
      }
      return user;
    } catch (err) {
      throw err;
    }
  };

  // create a new user
  static create = async (params) => {
    try {
      if (!params.email || !params.gender || !params.password || !params.role) {
        throw { name: "badRequest", message: "Bad request" };
      }
      const user = await User.create(params);
      return user;
    } catch (err) {
      throw err;
    }
  };

  // update a user
  static update = async (id, body) => {
    try {
      if (!body.email && !body.gender && !body.password && !body.role) {
        throw { name: "badRequest", message: "Bad request" };
      }
      const user = await User.findOne(body, {
        where: {
          id,
        },
      });
      if (!user) {
        throw { name: "errorNotFound", message: "User not found" };
      }
      await User.update(body, { where: { id } });
    } catch (err) {
      throw err;
    }
  };

  // delete a user
  static destroy = async (params) => {
    try {
      const user = await User.findOne(params);
      if (!user) {
        throw { name: "errorNotFound", message: "User not found" };
      }
      await user.destroy();
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserRepository;