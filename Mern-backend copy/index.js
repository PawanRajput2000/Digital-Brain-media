const express = require('express');
const cors = require("cors");
require("./db/config")
const router = require('./route/route')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/",router)

app.listen(5000, () => {
    console.log(`Server running on port ${5000}`);
});

