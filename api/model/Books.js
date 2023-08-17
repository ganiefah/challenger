const db = require("../config");
class Books {
  fetchBooks(req, res) {
    const query = `
            SELECT * FROM Books
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  fetchBook(req, res) {
    const query = `
            SELECT * FROM Books 
            WHERE bookID = ${req.params.id}
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: data,
      });
    });
  }
  addBook(req, res) {
    const data = req.body;
    const query = `
            INSERT INTO Books
             SET ?
        `;
    db.query(query, [data], (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Book was successfully added.",
      });
    });
  }
  removeBook(req, res) {
    const query = `
            DELETE FROM BOOKS
             WHERE bookID = ${req.params.id}
        `;
    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Book record was deleted successfully",
      });
    });
  }
  updateBook(req, res) {
    const query = `
            UPDATE Books SET ?
             WHERE bookID = ${req.params.id}
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Book details were updated",
      });
    });
  }
}
module.exports = Books;