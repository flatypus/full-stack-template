import dotenv from "dotenv";
import express from "express";
import { register } from "@reflet/express";
import { HelloRouter } from "@routes/hello.route";

dotenv.config();

const PORT = process.env.API_PORT || 6969;

const app = express();

register(app, [HelloRouter]);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
