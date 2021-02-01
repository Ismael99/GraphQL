//Schema, los atributos o propiedades que se podran consulta en determinada ruta.

// Crear un nuevo schema
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema; 

//Para definir lo que se hará cuando se recibe una peticion
const resolvers = require('../resolvers/resolvers');

//Definicion de Tipos, lo que se podra consultar
//Primero se define aqui  luego en el resolvers
const typeDefs = `
    
    type Query{
        hello: String!
        students: [Student]
    }
    type Mutation{
        createStudent(input: inputStudent!): Student
    }
    type Student{
        _id: ID,
        name: String!,
        last_name: String!,
        age: Int!,
    }
    input inputStudent{
        name: String!,
        last_name: String!,
        age: Int!,
    }

`;

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})

module.exports = schema;
