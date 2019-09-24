let express = require("express");
let app = express();
let userRouter = require("./routes/user.route");
let bodyParser = require("body-parser")

// resive informacion en Json
app.use(bodyParser.json())

// configuramos la primer ruta
app.get("/", (req, res) => {
  res.send("respuesta desde raiz app/ ");
});

// condiguramos la ruta para los routes /api/rputes
app.use("/api/users", userRouter);  // defino la ruta principal o raiz

module.exports = app;