import {useState} from "react";

interface AddTaskFormProps {
    onAdd: (title:string, dueDate:string, priority: 'LOW' | 'MEDIUM' | 'HIGH') => void
}

function AddTaskForm({ onAdd }: AddTaskFormProps) {
    const [title, setTitle] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('LOW')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !dueDate) return
        onAdd(title, dueDate, priority)
        setTitle('')
        setDueDate('')
        setPriority('LOW')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
            <select value={priority} onChange={(e) => setPriority(e.target.value as 'LOW' | 'MEDIUM' | 'HIGH')}>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    )
}
export default AddTaskForm