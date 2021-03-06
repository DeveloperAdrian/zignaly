require("dotenv").config();
const express = require("express");
const Router = require("./routes/routes");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", Router);

app.listen(4000,()=>console.log("running on port 4000"))
