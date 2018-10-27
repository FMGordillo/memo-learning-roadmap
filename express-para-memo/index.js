const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

/**
 * GET - web browsers
 * POST - mandar datos de manera "privada"
 * PUT - actualizar datos
 * DELETE - borrar
 * PATCH - actualizaciones / modificaciones
 * ...
 */

// { "key": "value"}

// https://www.npmjs.com/package/ejs
app.get("/", function onGet(req, res) {
  res.render("index", {
    nombre: "Emiliano",
    apellidos: { primer: "Taboada", segundo: "Taborda" }
  });
});

// app.get("/saludar", function putoElQueLee(req, res) {
//   res.send("hola jorge, queres un globito?");
// });
// app.get("/saludar/saludo2", function rajamelatabla(req, res) {
//   res.send("saludo N°2 a Rajatabla");
// });

// http://localhost:3000/saludar
app.listen(port, function onListen() {
  console.log("servidor funcionando");
});
