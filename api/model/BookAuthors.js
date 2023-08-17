const db = require("../config");
class BookAuthors {
  fetchAuthors(req, res) {
    const query = `
            SELECT id, authorName, authorSurname, bookID 
            FROM BookAuthor
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  fetchAuthor(req, res) {
    const query = `
            SELECT id, authorName, authorSurname, bookID FROM BookAuthor 
            WHERE id = ${req.params.id}
        `;
    db.query(query, (err, data) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  addAuthor(req, res) {
    const data = req.body;
    const query = `
            INSERT INTO BookAuthor
             SET ?
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results: data,
      });
    });
  }
  removeAuthor(req, res) {
    const query = `
            DELETE FROM BookAuthor
             WHERE id = ${req.params.id}
        `;
    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "BookAuthor was deleted successfully",
      });
    });
  }
  updateAuthor(req, res) {
    const data = req.body;
    const query = `
            UPDATE BookAuthor SET ?
             WHERE id = ${req.params.id}
        `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Book Author was updated successfully",
      });
    });
  }
}
module.exports = BookAuthors;