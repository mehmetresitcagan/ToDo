const express = require('express');
const app = express();
const tasks = require("./routes/tasks");

const port = 3000;


//middleware
app.use(express.json())    // rec.body deki datayı almak için kullanmamız gerekiyor

// routes
app.use('/api/v1/tasks' ,tasks);


//// get all tasks
//app.get('/api/v1/tasks', (req,res) => {});
//// create a task
//app.post('/api/v1/tasks', (req,res) => {});
//// get single task
//app.get('/api/v1/tasks/:id', (req,res) => {});
//// update task
//app.patch('/api/v1/tasks/:id', (req,res) => {});
//// delete task
//app.delete('/api/v1/tasks/:id', (req,res) => {});


app.listen(port,console.log(`server listening on ${port}...`));
