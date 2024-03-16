const movieService = require("../services/movieService");

class MovieController {
  // find all movies
  static findAll = async (req, res, next) => {
    try {
      const movies = await movieService.findAll();
      res.status(200).json(movies);
    } catch (err) {
      next(err);
    }
  };

  // find one movie
  static findOne = async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = await movieService.findOne(id);
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  };

  // create a movie
  static create = async (req, res, next) => {
    try {
      const bodyReq = req.body;
      const movie = await movieService.create(bodyReq);
      res
        .status(201)
        .json({ message: "Movie created successfully", data: movie });
    } catch (err) {
      next(err);
    }
  };

  // update a movie
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body,
      };
      const movie = await movieService.update(params);
      res
        .status(200)
        .json({ message: "Movie updated successfully", data: movie });
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      const id = req.params.id;
      await movieService.destroy(id);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
      next(err);
    }
  };

  static uploadImage = async (req, res, next) => {
    try {
      const upload = await movieService.uploadImage(req.file);
      res
        .status(200)
        .json({ message: "Image uploaded successfully", data: upload });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = MovieController;