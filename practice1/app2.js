import express from 'express'
import fs from 'fs'

const app = express();
const PORT = 6000

app.use(express.json())
let data2;
app.get('/api/jobs',(req,res) => {
    fs.readFile('./jobsData.js','utf-8',(err,data) => {
        const parsedData = JSON.parse(data)
        console.log("PaRSED data",parsedData)
        data2 = parsedData;
    })
    res.status(200).json({
        data:data2,
    })
})
app.post("/api/jobs",(req,res) => {
    console.log("Request Data ===>>>>",req.body)
    data2.push(req.body)
    fs.writeFile('./jobsData.js',JSON.stringify(data2),'utf-8',(err) => {
        if(!err) res.send("New Jobs Uploaded")
    })
})
app.listen(PORT,() => {
    console.log(`Server Started At PORT ${PORT}`);
})