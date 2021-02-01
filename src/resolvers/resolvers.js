const students = require('../data/example');
console.log(students);
const resolvers = {
    Query:{
        hello: () => 'Hello world',
        students: () => students,
    },
    Mutation: {
        createStudent: (_, {input }) => {
            input._id = students.length;
            students.push(input);
            return input;
        }
    }
}

module.exports = resolvers;