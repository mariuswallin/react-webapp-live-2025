import { useState } from "react"
import type { Task } from "../types"
import TaskForm from "./TaskForm"

export default function TasksManager({
    initialTasks
}: {
    initialTasks: Task[]
}) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks)

    const onTaskCreate = (task: Task) => {
        setTasks(prev => ([...prev, task]))
    }

    return <section>
        <TaskForm onTaskCreate={onTaskCreate}/>
        <p>{tasks.length}</p>
    </section>
}