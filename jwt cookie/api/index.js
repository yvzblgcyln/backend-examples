import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001" }));

app.use("/api/users", userRoutes);

app.listen(8888, () => console.log(`Server running on port: http://localhost:8888`));
