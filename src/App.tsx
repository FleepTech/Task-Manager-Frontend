import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import type { Task } from './types'
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
    /*const handleUpdateTitle = (taskId: number, updatedTitle: string) => {
      axios.put(`${API}/${taskId}`, {title: updatedTitle}).then(() => setTasks(tasks.map(t => t.taskId === taskId ? {...t, title: updatedTitle} : t)))
    }
    const handleUpdatePriority = (taskId: number, updatedPriority: 'LOW' | 'MEDIUM' | 'HIGH') => {
      axios.put(`${API}/${taskId}`, {priority: updatedPriority}).then(() => setTasks(tasks.map(t => t.taskId === taskId ? {...t, priority: updatedPriority} : t)))
    }
    const handleUpdateDueDate = (taskId: number, updatedDueDate: string) => {
      axios.put(`${API}/${taskId}`, {dueDate: updatedDueDate}).then(() => setTasks(tasks.map(t => t.taskId === taskId ? {...t, dueDate: updatedDueDate} : t)))
    }®
*/
  return (
      <div>
        <h1>Task Manager</h1>
          <AddTaskForm onAdd = {handleAddTask}/>
          <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle}/>
      </div>
  )
}


export default App