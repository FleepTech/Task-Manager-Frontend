    import { useState } from 'react'
    import type {Task} from "../types.ts";

    interface TaskCardProps {
        task: Task
        onDelete: (taskId: number) => void
        onToggle: (taskId: number) => void
        onUpdateTask: (taskId: number, updates: { title?: string; dueDate?: string; priority?: 'LOW' | 'MEDIUM' | 'HIGH'}) => void
    }

    function TaskCard({ task, onDelete, onToggle, onUpdateTask }: TaskCardProps) {
        const [isEditing, setIsEditing] = useState(false)
        const [editTitle, setEditTitle] = useState(task.title)
        const [editDueDate, setEditDueDate] = useState(task.dueDate)
        const [editPriority, setEditPriority] = useState(task.priority)

        const handleSave = () => {
            onUpdateTask(task.taskId, {title:editTitle, dueDate:editDueDate, priority:editPriority})
            setIsEditing(false)
        }

        const handleCancel = () => {
            setEditTitle(task.title)
            setEditDueDate(task.dueDate)
            setEditPriority(task.priority)
            setIsEditing(false)
        }

        return (
            <div className={`bg-gray-900 rounded-xl p-4 mb-3 flex items-center justify-between gap-4 ${task.completed ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.taskId)}
                        className="w-5 h-5 cursor-pointer accent-blue-500"
                    />
                    <div>
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className="bg-gray-800 text-white px-2 py-1 rounded mb-1"
                                />
                                <input
                                    type="date"
                                    value={editDueDate}
                                    onChange={(e) => setEditDueDate(e.target.value)}
                                    className="bg-gray-800 text-white px-2 py-1 rounded mb-1"
                                />
                                <select
                                    value={editPriority}
                                    onChange={(e) => setEditPriority(e.target.value as 'LOW' | 'MEDIUM' | 'HIGH')}
                                    className="bg-gray-800 text-white px-2 py-1 rounded"
                                >
                                    <option value="LOW">Low</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="HIGH">High</option>
                                </select>
                            </>
                        ) : (
                            <>
                                <p className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                                    {task.title}
                                </p>
                                <p className="text-gray-400 text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                {!isEditing && (
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        task.priority === 'HIGH' ? 'bg-red-500/20 text-red-400' :
                            task.priority === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-green-500/20 text-green-400'
                    }`}>
                        {task.priority}
                    </span>
                    )}
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="text-green-500 hover:text-green-400 transition-colors text-sm"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-blue-500 hover:text-blue-400 transition-colors text-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => onDelete(task.taskId)}
                                className="text-gray-500 hover:text-red-500 transition-colors text-sm"
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        )
    }

    export default TaskCard