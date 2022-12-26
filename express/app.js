const express = require("express");
const app = express();
//----------default-----------------------------
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/api/products", (req, res) => {
//   res.send("ürünler listelendi");
// });
//---------middleware-----------------------------
// app.use((req, res, next) => {
//   console.log("middleware1 calisti");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("middleware2 calisti");
//   res.send("<h1>hello world</h1>");
// });
//---------routing------------------------------
// app.use("/", (req, res, next) => {
//   console.log("loglama yapildi");
//   next();
// });
// app.use("/add", (req, res, next) => {
//   res.send("<h1>add route</h1>");
// });
// app.use("/", (req, res, next) => {
//   res.send("<h1>hello world</h1>");
// });
//---------body parser-------------------------
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/add-product", (req, res, next) => {
//   res.send(`
//      <html>
//         <head> <title>add product</title>  </head>
//         <body>
//             <form action="/product" method="POST">
//                 <input type="text" name="productName">
//                 <input type="submit" value="Save product">
//         </body>
//      </html>
//      `);
// });
// app.post("/product", (req, res, next) => {
//   //db kayıt işlemi yapılabilir
//   console.log(req.body);
//   res.redirect("/");
// });
// app.use("/", (req, res, next) => {
//   res.send("<h1>hello world</h1>");
// });
//---------not found-------------------------
// app.use((req, res, next) => {
//   res.status(404).send("<h1>page not found</h1>");
// });
//---------db bağlantısı----------------------
const connection = require("./utility/database");

connection
  .execute("SELECT * FROM products")
  .then((result) => {
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });
connection
  .execute("SELECT price,name FROM products")
  .then((result) => {
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
