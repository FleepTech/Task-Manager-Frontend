import type {Task} from "../types.ts";
import TaskCard from "./TaskCard.tsx"
interface TaskListProps {
    tasks: Task[]
    onDelete: (taskId: number) => void
    onToggle: (taskId: number) => void
}

function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskCard key={task.taskId} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default TaskList