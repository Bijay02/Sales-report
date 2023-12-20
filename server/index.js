import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
const PORT = process.env.PORT;

app.post('/calculate', (req,res)=>{
    const data = req.body.data;

    const mean = data.reduce((acc,val)=> acc + val, 0)/data.length;
    const variance = data.reduce((acc, val)=> acc + Math.pow(val-mean ,2),0)/ data.length;
    const standardDeviation = Math.sqrt(variance);

    res.json({
        variance: variance,
        standardDeviation: standardDeviation
    });
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})