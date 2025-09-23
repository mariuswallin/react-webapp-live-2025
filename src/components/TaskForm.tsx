'use client'

import React, { useState } from "react"
import type { Task } from "../types"
import { useTask } from "../hooks/useTask"

type TaskFormProps = {
    onTaskCreate: (task:Task) => void
}

export default function TaskForm(props: TaskFormProps) {
    const {onTaskCreate} = props

    const {task, actions} = useTask({title: "Test"})

    // const [taskItem, setTaskItem] = useState<Task>({
    //     id: "",
    //     title: "",
    //     description: "",
    //     dueDate: new Date()
    // })

    // const updateTask = (value: Partial<Task>) => {
    //     // value = {title: "Ny tittel"}
    //     const id = crypto.randomUUID()
    //     // { id: '', title: '', description: '', dueDate: "", title: "Ny tittel", id: ""}
    //     // { id: 'ny-id', title: "Ny tittel", description: '', dueDate: "DATO" }
    //     setTaskItem((prev) =>({...prev, ...value, id}))
    // }

    const onCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isInvalidData = !task.title || !task.description
        const isValidData = task.title && task.description

        if(!actions.validateTask(task)) {
            alert("Alle felter må fylles inn")
            return

        }

        if(actions.validateTask(task)) {
            // Do something with data
            onTaskCreate(task)
            return
        }


    }
    return (
        <form onSubmit={onCreateTask}>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    id="title"
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={e => actions.updateTask({title: e.target.value})}
                />
            </div>
            <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={(e) => actions.updateTask({ description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate.toLocaleString()}
          onChange={(e) => actions.updateTask({ dueDate: new Date(e.target.value) })}
        />
      </div>
      <button type="submit">Create task</button>
        </form>
    )
}