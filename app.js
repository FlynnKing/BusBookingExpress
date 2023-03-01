var createError = require("http-errors");
const bodyParser = require('body-parser')
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const ListaAutobus = require("./Controller/ListaAutobus");
const Postiamo = require("./Controller/POST");
app.get("/listabus", ListaAutobus.getAutobus);
app.post("/postiamo", Postiamo.postiamo);

// app.get('/taxi/:id', ListaAutobus.getTaxyById)
// app.post('/taxi', ListaAutobus.createTaxi)
// app.put('/taxi/:id', ListaAutobus.updateTaxi)
// app.delete('/taxi/:id', ListaAutobus.deleteTaxi)

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};


});

module.exports = app;
