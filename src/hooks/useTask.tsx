"use client"

import { useState } from "react"
import type { Task } from "../types"

export function useTask(initialTask: Partial<Task> = {}) {
    const [task, setTask] = useState<Task>({
        id: crypto.randomUUID(),
        title: "",
        description: "",
        dueDate: new Date(),
        ...initialTask
    })


    // const validateTask = (task: Task) => !task.title || !task.description
    const validateTask = (task: Task) => {
        // return (!task.title || !task.description)
        if(!task.title ||  !task.description) return false
        return true
    }

    const updateTask = (data:Partial<Task>) => {
        setTask(prev => ({...prev, ...data}))
    }


    return {task, actions: {updateTask, validateTask}}
}