const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../midddleware/AuthenticateUser");
class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, gender, emailAdd, profileUrl FROM Users
    `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, gender, emailAdd, profileUrl FROM Users WHERE userID = ${req.params.id}
    `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {}
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass = await hash(data.userPass, 15);
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    const query = `
      INSERT INTO Users SET ?
    `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      // Create token
      let token = createToken(user);
      res.cookie("LegitUser", token, {
        expires: new Date(Date.now() + 259200000),
        httpOnly: true,
      });
      res.json({
        status: res.statusCode,
        msg: "You are registered."
      })
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users WHERE userID = ${req.params.id}
    `;
    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record was deleted successfully",
      });
    });
  }
  updateUser(req, res) {
    const query = `
        UPDATE Users SET ? where userID = ${req.params.id}
    `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User details were updated successfully",
      });
    });
  }
  alterUser(req, res) {}
}
module.exports = Users;
