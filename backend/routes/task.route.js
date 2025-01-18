import express from "express";
import Task from "../models/task.model.js";

const router = express.Router();

// Get all tasks and render the task page
router.get("/task-page", async (req, res) => {
    try {
        const tasks = await Task.find();  // Fetch tasks from the database
        res.render("task", { tasks });  // Pass tasks to the task.ejs view
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch tasks!" });
    }
});

// Create a new task
router.post("/task-page", async (req, res) => {
    try {
        const { name, desc, date, set, elapsed } = req.body;
        const newtask = new Task({ name, desc, date, set, elapsed });
        await newtask.save();
        res.redirect("/api/task/task-page");  // Redirect to /task to display updated tasks
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add Task!" });
    }
});

export default router;
