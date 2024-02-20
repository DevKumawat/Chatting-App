const express = require("express")
const cors = require("cors"); 
const app = express();
const authRoutes = require("./routes/auth")

const PORT = process.env.PORT || 5023;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/" , (req,res)=>{
    res.send("hello")
})

app.use("/auth" , authRoutes)

app.listen(PORT , ()=> console.log(`This Server is running on ${PORT}`));