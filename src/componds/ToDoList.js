import React, {useState} from "react";
import "./ToDoList.css"

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast","Sleeping", "Go to work"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
        else{
            setNewTask("");
        }

    }
    function removeTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks)
    }
    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] =
            [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks);
        }    
        
    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] =
            [updateTasks[index+1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return(
        <div className="div">
            <h1>wElCoMe to To-Do-List</h1>

            <div className="to-do-list">
               <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
               <button  onClick={addTask} className="add-button">
                  Add
               </button>
            </div>

            <ol className="ol">
                {tasks.map((task, index) => 
                    <li key={index}> 
                      <span className="text">{task}</span>
                      <button className="delete-button" onClick={() => removeTask(index)}>
                        Delete
                      </button>
                      <button className="move-button" onClick={() => moveTaskUp(index)}>
                      👆
                      </button>
                      <button className="move-button" onClick={() => moveTaskDown(index)}>
                      👇
                      </button>

                    </li>
                )}
            </ol>




        </div>
    )
}
export default ToDoList