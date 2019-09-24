let express = require("express");
let userCtr = require("../controllers/user.controller");

let userRouter = express.Router();

userRouter
  //Obtener todo los usuarios Get All Users
  .get("/", userCtr.getAllUsers)

  .post("/create", userCtr.createUser)

  .delete("/delete", userCtr.deleteUser)

  .put("/update", userCtr.updateUser )
  
module.exports = userRouter;
