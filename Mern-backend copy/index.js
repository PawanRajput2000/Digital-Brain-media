const express = require('express');
const cors = require("cors");
const { sequelize } = require('sequelize');

const { User, Task } = require('./db/config');

const Jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(express.json());



app.listen(5000, () => {
    console.log(`Server running on port ${5000}`);
});

