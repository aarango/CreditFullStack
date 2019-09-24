let mongoose = require("mongoose"); // llamo a l libbreria que me permite comunicar con mogo
let Schema = mongoose.Schema; // llamo la funcioón que me trae el esquema de la bd

let userShema = new Schema({
  // con esto defino lo que va a tener la base de datos ( Lo que le voy a enviar)

  id: { type: Number, required: true },
  nombre: {type:String, required:true },
  apellido: { type:String, required:true },
  cedula: Number,
  creado: { type: Date, default: Date.now },
});

module.exports = mongoose.model('user',userShema)