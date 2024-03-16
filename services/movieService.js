const movieRepository = require("../repositories/movieRepository");

class MovieService {
  // find all movies
  static findAll = async (params) => {
    try {
      const movie = await movieRepository.findAll(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // find one movie
  static findOne = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      const movie = await movieRepository.findOne(filterOption);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // create a new movie
  static create = async (params) => {
    try {
      const movie = await movieRepository.create(params);
      return movie;
    } catch (err) {
      throw err;
    }
  };

  // update a movie
  static update = async (params) => {
    try {
      const { id, body } = params;
      await movieRepository.update(id, body);
    } catch (err) {
      throw err;
    }
  };

  // delete a movie
  static destroy = async (id) => {
    try {
      const filterOption = {
        where: {
          id,
        },
      };
      await movieRepository.destroy(filterOption);
    } catch (err) {
      throw err;
    }
  };

  // upload an image
  static uploadImage = async (file) => {
    try {
      if (!file) {
        throw {
          name: "missingFile",
          message: "please choose image before uploading",
        };
      }
      const url = `${process.env.BASE_URL}/api/images/${file.filename}`;
      return url;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = MovieService;