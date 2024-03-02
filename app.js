const express = require('express');
const app = express();

const port = 3000;

// routes
app.get('/hello', (req,res) => {
    res.send("Task Manager")
});

app.listen(port,console.log(`server listening on ${port}...`));
