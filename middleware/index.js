import express from 'express'
import morgan from 'morgan';

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(morgan('dev'))
const productArr = [
    {
        id:"1",
        name:"Nokia",
        price:500,
        desc:"fydgadgjhasgduguAGJJHGHGHCD",
    },
    {
        id:"2",
        name:"Samsung",
        price:1500,
        desc:"fydgadgjhasgduguAGJJHGHGHCD",
    },
    {
        id:"3",
        name:"Iphone",
        price:5000,
        desc:"fydgadgjhasgduguAGJJHGHGHCD",
    },
    {
        id:"4",
        name:"Realme",
        price:1000,
        desc:"fydgadgjhasgduguAGJJHGHGHCD",
    },
    {
        id:"5",
        name:"OnePlus",
        price:2500,
        desc:"fydgadgjhasgduguAGJJHGHGHCD",
    },
]
app.use((req,res,next) => {
    req.studentName = "Alex"
    console.log(`Middleware Number 1`);
    next()
})
app.use((req,res,next) => {
    console.log("Student1 Name ==>>>>",req.studentName)
    req.studentName2 = "John" 
    console.log("Middleware Number 2")
    next()
})
app.get('/',(req,res) => {
    res.send("Yeh meri / ki API hai")
})
app.get('/students',(req,res) => {
    console.log(req.studentName, "First API")
    console.log(req.studentName2, "Second API")
    res.send("Ok Hogaya!")
})
app.get('/products',(req,res) => {
    res.json({
        status: true,
        data:productArr,
    })
})
app.get('/products/:id',(req,res) => {
    console.log(req.params, "===>>>>Request Params")
    const findProd = productArr.find((prod) => {
        return prod.id === req.params.id
    })
    res.json({
        status:true,
        data:findProd,
    })
})
app.listen(PORT,() => {
    console.log(`Server started at PORT ${PORT}`)
})