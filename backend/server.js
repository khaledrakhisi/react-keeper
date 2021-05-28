const express = require("express");
const NOTES = require("./notes");
// const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.get("/", (req, res)=>{
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    console.log("req received.");
    // res.send("connected..............");
    res.status(200).json({notes: NOTES});
});

app.listen(PORT, ()=>{
    console.log("server started on ", PORT);
});

