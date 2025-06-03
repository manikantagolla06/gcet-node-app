import express from 'express'
import cors from 'cors'

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express()
app.listen(8080, () =>{
    console.log("Server Started");
});
app.use(cors())
app.use(express.json());
app.use("/users", userRouter);

app.use("/products", productRouter);
app.get("/", (req,res) => {
    return res.send("Mod bits yesee");
});
app.get("/greet",(req,res)=>(res.send("Greetings")))
app.get("/name",(req,res)=>(res.send("Manikanta kiran golla")))
app.get("/Weather",(req,res)=>(res.send("69 degree")))
app.get("/Movie",(req,res)=>(res.send("Khaleja")))
.

app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 69 },
    { name: "Product 2", price: 690 },
    { name: "Product 3", price: 609 },
  ];
  res.json(products);
});

const userSchema = mongoose.Scheme({
  name:{type:String},
});

const user = mongoose.model("User",userSchema);

