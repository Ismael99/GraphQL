import students from '../data/example';
//importamos el modelo de user
import User  from '../models/User';

console.log(students);
const resolvers = {
    Query:{
        hello: () => 'Hello world',
        students: () => students,
        users: async () => {
            return await User.find();
        }
    },
    Mutation: {
        createStudent: (_, {input }) => {
            input._id = students.length;
            students.push(input);
            return input;
        },
        createUser: async (_, {input}) =>{
            //Se crea una instancia del modelo User a partir del input (objeto inputUser del schema)
            const newUser = new User(input);
            console.log(newUser);
            console.log('hola');
            //Se guarda el registro
            await newUser.save();
            //Retornamos el objeto recien creado
            return newUser;
        }
    }
}

export default resolvers;