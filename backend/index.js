import {express} from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import userRoutes from "./Routes/userRoutes.js"


dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});



// Middlewares
app.use(express.json({ limit: "50mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



server.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));