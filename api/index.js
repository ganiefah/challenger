// const express = require("express");
// const app = express();
// const path = require("path");
// const port = +process.env.port || 3000;
// const db = require("./config");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// app.use(express.urlencoded({ extended: false }));

// app.use(express.static("./static"));

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./static/html/index.html"));
// });

// app.get("/users", (req, res) => {
//   const query = `
//         SELECT * FROM Users
//     `;
//   db.query(query, (err, data) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       results: data,
//     });
//   });
// });

// app.get("/user/:id", (req, res) => {
//   const query = `
//         SELECT * FROM Users WHERE userID = ${req.params.id};
//     `;
//   db.query(query, (err, data) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       results: data,
//     });
//   });
// });

// app.put("/user/:id", bodyParser.json(), (req, res) => {
//   const query = `
//         UPDATE Users SET ? WHERE userID = ${req.params.id};
//     `;
//   db.query(query, [req.body, req.params.id], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record was updated successfully",
//     });
//   });
// });

// app.patch("/user/:id", bodyParser.json(), (req, res) => {
//   const query = `
//         ALTER TABLE Users MODIFY COLUMN ? WHERE userID = ${req.params.id};
//     `;
//   db.query(query, [req.body, req.params.id], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record was modified successfully",
//     });
//   });
// });

// app.post("/register", bodyParser.json(), (req, res) => {
//   const query = `
//         INSERT INTO Users SET ?;
//     `;
//   db.query(query, [req.body], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Inserted data successfully",
//     });
//   });
// });

// app.delete("/user/:id", (req, res) => {
//   const query = `
//         DELETE FROM Users WHERE userID = ${req.params.id}
//     `;
//   db.query(query, (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record was deleted successfuly",
//     });
//   });
// });

// app.get("/books", (req, res) => {
//   const query = `
//         SELECT * FROM Books;
//     `;
//   db.query(query, (err, data) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       results: data,
//     });
//   });
// });

// app.get("/book/:id", (req, res) => {
//   const query = `
//         SELECT * FROM Books WHERE bookID = ${req.params.id}
//     `;
//   db.query(query, (err, data) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       results: data,
//     });
//   });
// });

// app.put("/book/:id", bodyParser.json(), (req, res) => {
//   const query = `
//         UPDATE Books SET ? WHERE bookID = ${req.params.id}
//     `;
//   db.query(query, [req.body, req.params.id], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record was updated successfully",
//     });
//   });
// });

// app.patch("/book/:id", bodyParser.json(), (req, res) => {
//   const query = `
//         ALTER TABLE Books MODIFY COLUMN ? WHERE bookID = ${req.params.id}
//     `;
//   db.query(query, [req.body, req.params.id], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record updated successfully",
//     });
//   });
// });

// app.post("/book", bodyParser.json(), (req, res) => {
//   const query = `
//         INSERT INTO Books SET ?
//     `;
//   db.query(query, [req.body, req.params.id], (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record inserted successfully",
//     });
//   });
// });

// app.delete("/book/:id", (req, res) => {
//   const query = `
//         DELETE FROM Books WHERE bookId = ${req.params.id}
//     `;
//   db.query(query, (err) => {
//     if (err) throw err;
//     res.json({
//       status: res.statusCode,
//       msg: "Record deleted successfully",
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });


const { express, routes } = require('./controller')
const app = express()

//static
app.use(express.static('./static'))
app.use(
  express.urlencoded({
    extended: false
  }),
  routes
)

routes.get('^/$|?challenger',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"./static/html/index.html"))
})

app.listen(port, ()=>{
  console.log(`the server is running on port ${port}`);
})
