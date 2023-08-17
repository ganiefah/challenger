const Users = require("./Users");
const Orders = require("./Orders");
const Books = require("./Books");
const BookAuthors = require("./BookAuthors");
// Export all objects
module.exports = {
  users: new Users(),
  books: new Books(),
  bookAuthors: new BookAuthors(),
  orders: new Orders()
};