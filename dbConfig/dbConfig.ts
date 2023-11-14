import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;

        connection.once('connect', () => {
            console.log('MongoDB connection established');
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error");
            process.exit();
        })            

    } catch (error) {
        console.log("Something went wrong");
        console.log(error);       
    }
}