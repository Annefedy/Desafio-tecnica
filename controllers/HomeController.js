const database = require("../database/models");

async function index(req, res) {
  const movieList = await database.Immobile.findAll();
  res.render("index", { movieList });
}

module.exports = {
  index,
};