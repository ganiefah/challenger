const db = require("../config");
class Orders {
  fetchOrders(req, res) {
    const query = `
        SELECT Orders.orderID, Users.userID, Books.bookID, Orders.orderDate
        FROM Orders
        INNER JOIN
        Users ON Orders.userID = Users.userID
        INNER JOIN
        Books on Orders.bookID = Books.bookID;
        `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchOrder(req, res) {
    const query = `
        SELECT Orders.orderID, Users.userID, Books.bookID,
         Orders.orderDate
         FROM Orders
         INNER JOIN Users
         ON Orders.userID = Users.userID
         INNER JOIN Books
         on Orders.bookID = Books.bookID
         WHERE orderID = ${req.params.orderID};
        `;
    db.query(query, [req.params.id], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  insertOrder(req, res) {
    const query = `
        INSERT INTO Orders VALUES(${req.params.orderID}, ${
      req.params.userID
    }, ${req.params.bookID}, ${new Date().now})
        `;
    db.query(query, [req.body, req.params], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Order added successfully",
      });
    });
  }
  async updateOrder(req, res) {
    const query = `
        UPDATE Orders SET orderDate = ${new Date().now}
    `;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Order date updated successfully",
      });
    });
  }
  removeOrder(req, res) {
    const query = `
        DELETE FROM Orders WHERE OrderID = ${req.params.orderID}
    `;
    db.query(query, [req.params.orderID], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Order deleted successfully!",
      });
    });
  }
}
module.exports = Orders;