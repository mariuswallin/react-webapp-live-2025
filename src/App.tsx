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

const tasks: Task[] = [
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
  return (
    <div>
      <h1>Hey</h1>
      {/* <TaskCard task={task} /> */}
      <TasksManager initialTasks={tasks} />
      {/* <TaskForm onTaskCreate={(task) => console.log(task)} /> */}
      <TaskList tasks={tasks}>
        <TaskFooter />
      </TaskList>
      <p>Du har X antall oppgaver</p>
    </div>
  );
}

export default App;
