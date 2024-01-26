import { Injectable ,BadRequestException } from '@nestjs/common';

import { Task, TaskStatus } from './task.entity';
import { createTaskDto, updateDto } from './dto/task.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TasksService {

  
  constructor(@InjectModel(Task)  private taskModel: typeof Task ){

  }
  
    async findAll(): Promise<Task[]>{
       return this.taskModel.findAll()
    }
    
    async create(createTaskDto:createTaskDto): Promise<Task> {
      const { title, description } = createTaskDto;
  
      // Crear la tarea en la base de datos
      try {
        const createdTask = await this.taskModel.create({
          title,
          description,
          status: TaskStatus.PENDING, // Puedes establecer un valor predeterminado si es necesario
        });
  
        return createdTask;
      } catch (error) {
        // Manejar errores de creación
        throw new BadRequestException('No se pudo crear la tarea');
      }
    }
 


//  private tasks : Task[] = [  
//  {
//    id:"1",
//    title:'first task',
//    description:'some task', 
//    status: TaskStatus.PENDING,
//  },

// ]

 
//   getAllTasks(){
//     return this.tasks

//   }
//   createTask(title:string,description:string){

//     const task ={
//         id: new Date().toISOString(),
//         title,
//         description,
//         status: TaskStatus.PENDING,
//     }
//     this.tasks.push(task);

//     return task;    
//   }


//   getTaskById(id:string):Task {  // que el retorno sea del tipo tarea
  
//     return this.tasks.find(task => task.id ===id);

//  }

//   updateTask(id:string,updateFields:updateDto) : Task{
//      const task = this.getTaskById(id);
//      const newTask = Object.assign(task,updateFields);
//      this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
     
//      return newTask;
     
//   }



//   deleteTask(id:string){
//     this.tasks = this.tasks.filter(task => task.id !== id);

    
//     return this.tasks;
//   }

}
