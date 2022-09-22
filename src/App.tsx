import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';
import {ITask} from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<ITask[]>([])
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void  => {
  //   if (event.target.name === 'task') {
  //     setTask(event.target.value)
  //   }
   
   };

 

  return (
    <div className="App"> 
     <div className="header">
       <input type="text" placeholder='Task...' name='task 'onChange={handleChange}/>

     </div>
    
    </div>
  );
}

export default App;
