// imports
import express from "express";
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import session  from "express-session";
import mongoose from "mongoose";
import clientRoutes from "./routes/client.route.js";
import taskRoutes from "./routes/task.route.js";
import MongoStore from 'connect-mongo';

// configuring the .env file
dotenv.config();

const server = express();
const port = process.env.PORT;

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "..", "frontend", "Views"));

// Middleware for serving static files (CSS, JS, etc.)
server.use(express.static("frontend"));
server.use(expressEjsLayouts);
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge:  60 * 60 * 1000,    
    },
    store: MongoStore.create({mongoUrl: process.env.MONGO_URL, ttl: 60 * 60,})
}));
server.use((req, res, next) => {
    console.log("Session client:", req.session.client); // Debug log
    res.locals.client = req.session.client || null;
    next();
});
server.use((req, res, next) => {
    console.log("Session Data Debug:", req.session); // Debug entire session object
    next();
});

// Use client routes for /api/client
server.use("/api/client", clientRoutes);

// Use task routes for /api/task
server.use("/api/task", taskRoutes);

// Serve frontend pages at root
server.use("/", clientRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB:", err);
});

// Start the server
server.listen(port, ()=> {
    console.log(`server is running at ${port}!`);
})