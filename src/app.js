const express = require("express"); // requerimos el paquete "express"
const app = express(); // aplicamos la ejecucion de express en la variable "app"
const path = require("path"); // requerimos el paquete "path"

const port = 3001; // guardamos el numero de puerto en la variable "port"

//Routers
const mainRoutes = require("./routes/mainRoutes");

// Definimos el motor de vistas que va a ser utilizado a nivel aplicacion
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Static files
app.use("/public", express.static("public"));

// Levantamos el sevidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(__dirname);
    console.log("¡¡¡Server levantado!!!");
  });

  //Routes

app.use("/",mainRoutes);