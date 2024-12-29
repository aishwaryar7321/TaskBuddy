import React, { useState } from 'react';

export default function TaskForm() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    return (
        <form>
        <input type='text'
        placeholder='Enter Your Task'
        required 
        value = {task}
        onChange={(e)=> setTask(e.target.value)}/>
        <span><button>Add Tasks</button></span>

        <div>
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option>Medium</option>
                <option>Low</option>
                <option>High</option>
            </select>

            <select value={category} onchange={(e)=>setCategory(e.target.value)}>
                <option>General</option>
                <option>Work</option>
                <option>Personal</option>
            </select>
        </div>
        </form>
    )
}