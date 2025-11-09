import express from "express";
import dotenv from "dotenv";
import fasilitasRoute from "./routes/fasilitasRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ini bro ${PORT}`);
});

// pusat
app.get("/", (request, response) => {
  return response.json({
    message: "Halooo broo",
    subject: "musik studio",
  });
});

// endpoint fasilitas
app.use("/api/fasilitas", fasilitasRoute);
