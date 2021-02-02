//Schema, los atributos o propiedades que se podran consulta en determinada ruta.

// Crear un nuevo schema
import {makeExecutableSchema} from 'graphql-tools'; 

//Para definir lo que se hará cuando se recibe una peticion
import resolvers from '../resolvers/resolvers';

//Definicion de Tipos, lo que se podra consultar
//Primero se define aqui  luego en el resolvers
const typeDefs = `
    
    type Query{
        hello: String!
        students: [Student]
        users: [User]
    }
    type Mutation{
        createStudent(input: inputStudent!): Student
        createUser(input: inputUser!): User
    }
    type Student{
        _id: ID,
        name: String!,
        last_name: String!,
        age: Int!,
    }
    type User{
        _id: ID,
        first_name: String!,
        last_name: String!,
        age: Int!,
    }
    input inputStudent{
        name: String!,
        last_name: String!,
        age: Int!,
    }

    input inputUser{
        first_name: String!,
        last_name: String!,
        age: Int!,
    }

`;

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})

export default schema;
