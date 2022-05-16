import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express();
import auth from "./routes/auth.js"
import users from "./routes/users.js"
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js"
dotenv.config;

app.use(express.json())
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://nmemarcoding:Nima1377@cluster0.y0ask.mongodb.net/booking1400?retryWrites=true&w=majority")
        console.log("Conected to Mongo db")
    } catch (eroor) {
        throw (eroor)

    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mangoDB disconnected")
})

mongoose.connection.on("conected", () => {
    console.log("mangoDB conected")
})




app.listen(8000, () => {
    connect()
    console.log("connected to server on port 8000!")
})