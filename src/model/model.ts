export interface UserDto {
  userId:string;
  password:string;
}


export interface TaskDto {
  taskId?: string;           // MockAPI auto-generates
  createdAt?: string;    // MockAPI auto-generates
  taskTitle: string;
  taskDescription: string;
  isCompleted: boolean;
  priority: string;
  dueDate: string;       // ISO date string
  userId?: string;
        // if linking tasks to users
}
