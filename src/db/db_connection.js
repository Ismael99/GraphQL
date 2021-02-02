const mongoose = require('mongoose');

export const connect = async () => {
    try {
        //mongodbgraphql es el nombre de la base de dato
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            //Para que no aparezca una advertencia
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); 
        console.log('>>>DB is connected');
    } catch (error) {
        console.log(error);
    }
}

