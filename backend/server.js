import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000;
dotenv.config();
 
app.use(express.json()); // to parse the incoming requests with JSON from req.body
app.use(cookieParser()); // to access the cookies before running the functions below
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//     // root route http://localhost:3000/
//     res.send("Hello World!");
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Listening on Port ${PORT}`)
});