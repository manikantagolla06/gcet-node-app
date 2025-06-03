import express from 'express'
import cors from 'cors'

const app = express()
app.listen(8080, () =>{
    console.log("Server Started");
});
app.use(cors())

app.get("/", (req,res) => {
    return res.send("Mod Gud");
});
app.get("/greet",(req,res)=>(res.send("Greetings")))
app.get("/name",(req,res)=>(res.send("Manikanta kiran golla")))
app.get("/Weather",(req,res)=>(res.send("69 degree")))
app.get("/Movie",(req,res)=>(res.send("Khaleja")))


app.get("/products", (req, res) => {
  const products = [
    { name: "Product 1", price: 69 },
    { name: "Product 2", price: 690 },
    { name: "Product 3", price: 609 },
  ];
  res.json(products);
});