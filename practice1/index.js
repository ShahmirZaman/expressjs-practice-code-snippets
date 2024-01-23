import express from "express";

const app = express();
const PORT = 5000;
app.use(express());
app.get('/',(req,res) => {
    res
    .status(200)
    .json({
        message:"Hello From Server Side!",
        app:"Natours",
    });
})
app.post('/',(req,res) => {
    res.send("You can post to this endpoint!")
})

app.listen(PORT,() => {
    console.log(`App running on port number ${PORT}`);
})