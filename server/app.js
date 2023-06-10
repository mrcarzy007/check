const express = require("express");
require("dotenv").config();
const app = express();
const port = 6500;
require("./db/conn");
const router = require("./Routes/router");





app.use(express.json());
app.use('/', router);
app.use(router);






app.listen(port, ()=>{
    console.log(`Backend Port is Running on ${port}`)
})
