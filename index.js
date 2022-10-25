const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("course API is running");
})

app.listen(port, () =>{
    console.log("course API is running on", port);
})