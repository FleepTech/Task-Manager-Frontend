import { useState, useEffect } from 'react'

import axios from 'axios'
import './App.css'
import type { Task } from './types'
import type { TaskUpdate } from './types'
import TaskList from "./components/TaskList.tsx";
import AddTaskForm from "./components/AddTaskForm.tsx";

const API = 'http://localhost:8080/tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    axios.get(API)
        .then(response => setTasks(response.data))
        .catch(error => console.error(error))
  }, [])
    const handleDelete = (taskId: number) => {
        axios.delete(`${API}/${taskId}`).then(() => setTasks(tasks.filter(t => t.taskId !== taskId)))
    }
    const handleToggle = (taskId: number) => {
      axios.patch(`${API}/${taskId}/toggle`).then(() => setTasks(tasks.map(t => t.taskId === taskId ? {...t, completed: !t.completed} : t)))
    }
    const handleAddTask = (title:string, dueDate:string, priority: 'LOW' | 'MEDIUM' | 'HIGH') => {
          axios.post(API, {title, dueDate, priority}).then(response => setTasks([...tasks, response.data]))
    }
    const handleUpdateTask = (
        taskId: number,
        updates: TaskUpdate) => {
      axios.put(`${API}/${taskId}`, updates).then(response => setTasks(tasks.map(t => t.taskId === taskId ? response.data : t)))
          .catch(error => console.error(error))
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Task Manager</h1>
                <AddTaskForm onAdd={handleAddTask}/>
                <TaskList tasks={tasks}
                          onDelete={handleDelete}
                          onToggle={handleToggle}
                          onUpdateTask={handleUpdateTask}
                />
            </div>
        </div>
    )
}


export default App