const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 6500;
require("./db/conn");
const router = require("./Routes/router");
const  bodyParser = require('body-parser')


app.use(router);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());





app.listen(port, ()=>{
    console.log(`Backend Port is Running on ${port}`)
})
