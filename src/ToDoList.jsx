import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTasks] = useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask])
            setNewTasks("")
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i)=> i !== index))
    }

    function moveTaskUp(index){
        const updatedTasks = [...tasks]
        if(index > 0){
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        const updatedTasks = [...tasks]
        if(index < updatedTasks.length - 1){
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input
                    type='text'
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}
                />

                <button 
                    className='add-button'
                    onClick={addTask}
                    >
                    Add
                </button>
            </div>

            <ol>
               {tasks.map((task, index) => {
                    return <li key={index}>
                        <span className='text'>
                            {task}
                        </span>
                        <button 
                            className='delete-button'
                            onClick={() => deleteTask(index)}
                            >
                            Delete
                        </button>
                        <button 
                            className='move-button'
                            onClick={() => moveTaskUp(index)}
                            >
                            ☝
                        </button>
                        <button 
                            className='move-button'
                            onClick={() => moveTaskDown(index)}
                            >
                            👇
                        </button>
                    </li>
                })} 
            </ol>
        </div>
    )
}

export default ToDoList