'use client'

import React, { useState } from "react"
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

    const onCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onCreateTask}>
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
            <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={taskItem.description}
          onChange={(e) => updateTask({ description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={taskItem.dueDate.toLocaleString()}
          onChange={(e) => updateTask({ dueDate: new Date(e.target.value) })}
        />
      </div>
      <button type="submit">Create task</button>
        </form>
    )
}