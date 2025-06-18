require("../config/db");

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const UserModel = require("../Models/Users");
const AuthRouter = require("../Routes/AuthRouter")
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/auth',AuthRouter);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})