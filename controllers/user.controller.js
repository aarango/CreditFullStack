let mongoose = require("mongoose");
let user = require("../models/user.mode");

let connectionSttring = "mongodb://app:1234@localhost:27017/microcredits_db";

mongoose.connect(connectionSttring);

// creo cada una de las funciondes del Crud

const getAllUsers = (req, res) => {
  res.send("Get all user");
};

const createUser = (req, res) => {

  // Call to bd
  console.log("create", req.body);

  // validate user buscamos si u usuario con cedula ya existe

  user.findOne({cedula: req.body.cedula})
    .then((response) => {
      console.log("user_Busqueda", response)
    })
    .catch((error) =>{
      console.log("error_Busqueda", error)
    })

  let newUser = new user(req.body);
  newUser
    .save()

    .then(response => {
      console.log("responseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", response);
      res.status(200).send("<h1>OK</h1>")
    })
    .catch((error) => {
      console.log("error*************************************", error.message);
      res.status(404).send({"error": error.message, "Status0": 404})
    });

//  res.send({ mensaje: "correcto" });
};

const deleteUser = (req, res) => {
  res.send("Elimino un susuario");
};

const updateUser = (req, res) => {
  res.send("Actualizo un usuario");
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser
};


//db.users.findOne({id:1})