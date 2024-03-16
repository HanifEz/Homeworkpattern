const userRepository = require("../repositories/userRepository");

class UserService {
  
  static findAll = async (params) => {
    try {
      const users = await userRepository.findAll(params);
      return users;
    } catch (err) {
      throw err;
    }
  };

  
  static findOne = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      const user = await userRepository.findOne(filterOption);
      return user;
    } catch (err) {
      throw err;
    }
  };

  
  static create = async (params) => {
    try {
      const user = await userRepository.create(params);
      return user;
    } catch (err) {
      throw err;
    }
  };

  // update a user
  static update = async (params) => {
    try {
      const { id, body } = params;
      await userRepository.update(id, body);
    } catch (err) {
      throw err;
    }
  };

  // delete a user
  static destroy = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      await userRepository.destroy(filterOption);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = UserService;