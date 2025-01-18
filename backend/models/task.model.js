import mongoose from "mongoose";

// Define the Task schema

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    set: {
        type: String,
        required: true,
    },
    elapsed: {
        type: String,
        default: "0:00",
    },
});

const Task = new mongoose.model("Task", TaskSchema);

export default Task;