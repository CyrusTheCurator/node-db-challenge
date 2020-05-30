const server = require("./server.js");

const PORT = process.env.PORT || 4000;
const recipeRouter = require("./recipes/recipeRouter");

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
