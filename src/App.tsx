import { useState } from 'react';
import './App.css';

import TaskCard from './components/TaskCard';
import TaskFooter from './components/TaskFooter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TasksManager from './components/TaskManager';
import type { Task } from './types';

const task = {
  id: '123',
  title: 'My Title Works',
  description: 'My description',
  dueDate: new Date(),
};

const initialTasks: Task[] = [
  {
    id: '1234',
    title: 'My Title Works',
    description: 'My description',
    dueDate: new Date(),
  },
  {
    id: '1235',
    title: 'My Title Works',
    description: 'My description',
    dueDate: new Date(),
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const onAddTask = (task: Task) => {
    setTasks(prev => ([...prev, task]))
  }
  return (
    <div>
      <h1>Hey</h1>
      {/* <TaskCard task={task} /> */}
      <TasksManager tasks={tasks} onAddTask={onAddTask} />
      {/* <TaskForm onTaskCreate={(task) => console.log(task)} /> */}
      <TaskList tasks={tasks}>
        <TaskFooter />
      </TaskList>
      <p>Du har {tasks.length} antall oppgaver</p>
    </div>
  );
}

export default App;
