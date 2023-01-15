import React, {useState, useEffect, useContext} from 'react';
import TaskCard from './TaskCard';
import {TaskContext} from '../context/TaskContext';



const TaskList = () => {

    const {tasks, deleteTask} = useContext(TaskContext)

    if(tasks.length === 0){
        return <h1 className="text-white text-4xl font-bold text-center capitalize">no hay tareas</h1>
    }


    return (
        <div className="grid grid-cols-4 gap-2 ">
            {
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    );
}

export default TaskList;
