import type {Task} from "../types.ts";

interface TaskCardProps {
    task: Task
    onDelete: (taskId: number) => void
    onToggle: (taskId: number) => void
}

function TaskCard({ task, onDelete, onToggle }: TaskCardProps) {
    return (
        <div className={`task-card ${task.completed ? 'completed' : ''}`}>
            <h3>{task.title}</h3>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: {task.priority}</p>
            <input  type="checkbox" checked={task.completed} onChange={() => onToggle(task.taskId)}/>
            <button onClick={() => onDelete(task.taskId)}>Delete</button>
        </div>
    )
}

export default TaskCard