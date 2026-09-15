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

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8 bg-gray-900 p-6 rounded-xl">
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="bg-gray-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'LOW' | 'MEDIUM' | 'HIGH')}
                className="bg-gray-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
            >
                Add Task
            </button>
        </form>
    )
}
export default AddTaskForm