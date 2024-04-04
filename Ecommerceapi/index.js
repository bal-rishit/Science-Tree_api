import express, { json } from "express";
const app = express();
import { connect } from "mongoose";
import { config } from "dotenv";
//import userRoute from "./routes/user";
import authRoute from './routes/auth.js';
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";


config();

connect(process.env.MONGO_URL)
    .then(()=> console.log("DB connection successfull"))
    .catch((err)=> {
        console.log(err);
    });
/////////////////////////////////////////////////////////


    
app.use(json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server running successfully");
});

//"mongodb+srv://balrishit:$ERE7pB5#mf!Jsr@cluster0.ydpeb0v.mongodb.net/?retryWrites=true&w=majority"