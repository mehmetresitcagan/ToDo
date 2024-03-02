getAllTasks = (req,res)=>{
    res.send("get all tasks");
}
getTask = (req,res)=>{
    res.json({id: req.params.id});
}
createTask = (req,res)=>{
    res.json(req.body);
}
updateTask = (req,res)=>{
    res.send("update task");
}
deleteTask = (req,res)=>{
    res.send("delete task");
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}