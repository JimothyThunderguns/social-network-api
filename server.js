const express = require("express");
const mongoose = require("mongoose");
const app = express.env.Port || 3001;

app.use(express.json());
app.use


//logs the mongo queries being executed

mongoose.set("debug", true);

app.listen(PORT, => console.log("connected to   localhost:${PORT}`"));