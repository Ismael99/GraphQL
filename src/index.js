//Para crear un servidor para desarrollo
const express = require("express");
const {graphqlHTTP} = require("express-graphql");
//Instancia de express
const app = express();

//Rutas
app.get("/", (req, res) => {
    res.json({
        message: 'Welcome to the API',
    })
});

app.use("/graphql", graphqlHTTP({ 

}));

//Iniciar el servidor y escuchar el puerto 3000
app.listen(3000, ()=> console.log("Server on port 3000"));