import type {Task} from "../types.ts";
import TaskCard from "./TaskCard.tsx"
interface TaskListProps {
    tasks: Task[]
    onDelete: (taskId: number) => void
    onToggle: (taskId: number) => void
    onUpdateTask: (taskId: number, updates: { title?: string; dueDate?: string; priority?: 'LOW' | 'MEDIUM' | 'HIGH' }) => void
}

function TaskList({ tasks, onDelete, onToggle, onUpdateTask }: TaskListProps) {
    if (tasks.length == 0) {
        return (
            <div className="text-center text-gray-500 mt-12">
                <p className="text-sm text-gray-500">No tasks yet</p>
                <p className="text-gray-500">Add one above to get started</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
        {tasks.map(task => (
                    <TaskCard
                        key={task.taskId}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                        onUpdateTask={onUpdateTask}
                    />
                ))}
            </div>
        )
}

export default TaskList