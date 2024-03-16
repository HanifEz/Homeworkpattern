const errorHandler = (err, req, res, next) => {
  console.error(err);
  if (err.name === "errorNotFound") {
    res.status(404).json({ message: err.message });
  } else if (err.name === "badRequest") {
    res.status(400).json({ message: err.message });
  } else if (err.name === "missingFile") {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;