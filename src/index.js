//Para crear un servidor para desarrollo
import express from "express";

//Para mostrar el graphiql
import {graphqlHTTP} from "express-graphql";

//Importamos el schema
import schema from './schemas/schema';

//Importar la conexion a la base de datos
import {connect} from './db/db_connection';

//Instancia de express
const app = express();

//se ejecuta la conexion
connect();

//Rutas
app.get("/", (req, res) => {
    res.json({
        message: 'Welcome to the API',
    })
});


app.use("/graphql", graphqlHTTP({ 
    graphiql: true,
    schema: schema,
}));

//Iniciar el servidor y escuchar el puerto 3000
app.listen(3000, ()=> console.log("Server on port 3000"));