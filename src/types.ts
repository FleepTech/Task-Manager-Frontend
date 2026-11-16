export interface Task {
    taskId: number
    title: string
    dueDate: string
    priority: 'LOW' | 'MEDIUM' | 'HIGH'
    completed: boolean
}

export interface TaskUpdate {
    title: string
    dueDate: string
    priority: 'LOW' | 'MEDIUM' | 'HIGH'
}