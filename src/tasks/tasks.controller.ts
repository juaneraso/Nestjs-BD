import { Body, Controller,Get,Post,Delete, Param, Patch} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateDto } from './dto/task.dto';
import { Task } from './task.entity';


@Controller('tasks')
export class TasksController {

  constructor(private taskservice:TasksService){

  }

  @Get()
  async findAll(): Promise<Task[]>{
    return this.taskservice.findAll();
  }

  @Post()
  async create(@Body() task: createTaskDto): Promise<Task> {
    return this.taskservice.create(task);
  }

  //  @Get()  // Aqui dentro puedo modificar la ruta  /tasks/ 
  //  getAll(){
  //   return this.taskservice.getAllTasks();

  //  } 
    
  //  @Post()   
  //  createTask(@Body() newTask:createTaskDto){      // Lo voy a guardar en newTask y es del tipo DTO
  //   //  const {title, description} = newTask;

  //   return this.taskservice.createTask(newTask.title,newTask.description); 
  //  }
   
  //  @Delete(":id")
  //  deleteTask(@Param('id') id:string){ // Lo guardo en una variable id de tipo string


  //    return this.taskservice.deleteTask(id);

  //  }
 
  //  @Patch(":id")
  //  updateTask(@Param('id') id:string , @Body() updateFields:updateDto){
    
  //   return this.taskservice.updateTask(id,updateFields);

  //  }


}
