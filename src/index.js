import express from "express";
import dotenv from "dotenv";
import fasilitasRoute from "./routes/fasilitasRoute.js";
import studioRoute from "./routes/studioRoute.js";
import userRoute from "./routes/userRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import authRoute from "./routes/authRoute.js";

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

// endpoint user
app.use("/api/user", userRoute);
// endpoint auth
app.use("/api/auth", authRoute);
// endpoint fasilitas
app.use("/api/fasilitas", fasilitasRoute);
// endpoint studio
app.use("/api/studio", studioRoute);
// endpoint booking
app.use("/api/booking", bookingRoute);
