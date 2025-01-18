import express from "express";
import Client from "../models/client.model.js";

const router = express.Router();
 
router.get("/", (req, res) => {
    console.log(req.session.client); // Debug session
    res.render("home");
});

// Login page: Render the login page with client data (from session)
router.get("/login", (req, res) => {
    res.render("login"); 
});

// Handle login: After successful login, save client to session and redirect to home
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const client = await Client.findOne({ email, password });
        if (!client) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        req.session.client = { id: client._id, name: client.name };
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to find client!" });
    }
});

// Register page: Render the register page with client data (from session)
router.get("/register", (req, res) => {
    res.render("register");
});

// Handle registration: After successful registration, save client to session and redirect to login
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newClient = new Client({ name, email, password });
        await newClient.save();
        req.session.client = { id: newClient._id, name: newClient.name }; 
        res.redirect("/login"); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add client!" });
    }
});

// Logout: Destroy the session and redirect to login page
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) console.error(err);
        res.redirect("/client/login"); // Redirect to login after logout
    });
});

export default router;
