import mongoose from "mongoose";

// Define the Client schema
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Create the model from the schema
const Client = mongoose.model("Client", clientSchema);

export default Client;