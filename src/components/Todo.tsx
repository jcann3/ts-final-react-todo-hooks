import React, { useState, useEffect } from 'react';
import './Todo.css';
import {ITodo} from '../interfaces';
//import {ITask} from '../interfaces';
//import {ICompletedTask} from '../interfaces';
import {ICreateTask} from '../interfaces';
import {IAddTask} from '../interfaces';
//import { IndexedAccessType } from 'typescript';



interface Task {
  tasks: string;
  index: number;
  completeTask: boolean;
  removeTask: boolean;
}

let arr:Task[] = [];

// interface Todo {
//   title: string;
//   completed: boolean;
//   pendingTasks: number;
//   tasks: string;
//   }

  // interface CompletedTask {
  // title: string;
  // tasks: string;
  // index: number;
  // completeTask: boolean;
  // removeTask: boolean;
  // completed?: number;
  // }

  // interface CreateTask {
  //   title: string;
  //   completed: boolean;
  // }  

  interface Props {
    tasks: IAddTask;
    Todo(): void;
  }
  const Tasks = ({ tasks }: Props) => {
    return (
      <div className="tasks">
      style={{ textDecoration: tasks.completed ? "line-through" : "" }} 
      {tasks.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
       <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
};


// class Task {
//   constructor (
//     public tasks: string, 
//     public index: number, 
//     public completeTask: boolean, 
//     public removeTask: boolean) {}
// return ( 
//   <div
//       className="task"
//       style={{ textDecoration: Task.completed ? "line-through" : "" }}
//   >
//       {Task.title}
//       <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
//       <button onClick={() => completeTask(index)}>Complete</button>
//   </div>
// );
  
// }


    
  // function Task(): JSX.Element  {
  //   return (
  //     <div
  //         className="task"
  //         style={{ textDecoration: tasks.completed ? "line-through" : "" }}
  //     >
  //         {tasks.title}
  //         <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
  //         <button onClick={() => completeTask(index)}>Complete</button>
  //     </div>
  //   );
  // }
  

  function Todo(): JSX.Element {
    const [pendingTasks, setPendingTasks] = useState(0);
    const [tasks, setTasks] = useState<ITodo[]>([
        {
            title: "Grab some Pizza",
            completed: true,
           
        },
        {
            title: "Do your workout",
            completed: true,
          
        },
        {
            title: "Hangout with friends",
            completed: false,
        
        }
    ]);

    useEffect(() => { 
     setPendingTasks(tasks.filter(task => !task.completed).length); 
    });

    const addTask = (title: string): void => {
      const newTasks = [...tasks, { title, completed: false }];
      setTasks(newTasks);
  };

     const completeTask = (index: number) => {
       const newTasks = [...tasks];
       newTasks[index].completed = true;
       setTasks(newTasks);
    };

    const removeTask = (index: number) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
  };

    return (
      <div className="todo-container">
          <div className="header">Pending tasks ({pendingTasks})</div>
          <div className="tasks">
              {tasks.map((tasks: ITodo, index) => (
                  <Tasks
                      tasks={tasks}
                      index={index}
                      completeTask={completeTask}
                      removeTask={removeTask}
                      key={index}
                  />
              ))}
          </div>
          <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
      </div>
  );
}

function CreateTask({ addTask }: { addTask: any;}): JSX.Element {
  const [value, setValue] = useState<ICreateTask>();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!value) return;
      
      addTask(value);
      setValue(value);
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value= {value}
            placeholder="Add a new task"
            onChange={e => setValue(e.target.value)}
        />
    </form>
);
}

export default Todo;

function completeTask(index: any): void {
  throw new Error('Function not implemented.');
}
function removeTask(index: any): void {
  throw new Error('Function not implemented.');
}

function index(index: any): void {
  throw new Error('Function not implemented.');
}

