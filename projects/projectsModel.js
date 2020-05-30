const db = require("../db-config");

module.exports = {
  getRecipes,
};
//helpers go here
function getRecipes(id) {
  if (id) {
    return db("recipes").where({ id });
  } else {
    return db("recipes");
  }
}
