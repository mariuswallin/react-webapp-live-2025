'use client'

import { useState } from "react"
import type { Task } from "../types"

export default function TaskForm() {
    const [taskItem, setTaskItem] = useState<Task>({
        id: "",
        title: "",
        description: "",
        dueDate: new Date()
    })

    const updateTask = (value: Partial<Task>) => {
        // value = {title: "Ny tittel"}
        const id = crypto.randomUUID()
        // { id: '', title: '', description: '', dueDate: "", title: "Ny tittel", id: ""}
        // { id: 'ny-id', title: "Ny tittel", description: '', dueDate: "DATO" }
        setTaskItem((prev) =>({...prev, ...value, id}))
    }
    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    id="title"
                    type="text"
                    name="title"
                    value={taskItem.title}
                    onChange={e => updateTask({title: e.target.value})}
                />
            </div>
        </form>
    )
}