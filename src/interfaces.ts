//interfaces for types

// export interface ITask {
//   tasks: string;
//   index: number;
//   completeTask: boolean;
//   removeTask: boolean;
//   // key: number;
// }

export interface ITodo {
      title: string;
      completed: boolean;
      }

export interface IAddTask {
  title: string;
  tasks: string;
  completed: boolean;
}
      
export interface ICompleteTask {
  index: number;
  tasks: string;
  completed: boolean;
}

export interface IRemoveTask {
  index: number;
  tasks: string;
}

export interface ICreateTask {
      title: string;
      completed: boolean;
    }  

// export interface ICompletedTask {
//       title: string;
//       tasks: string;
//       index: number;
//       completeTask: boolean;
//       removeTask: boolean;
//       completed: boolean;
//       }
     