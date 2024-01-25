import { TaskStatus } from '../task.entity';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'; 


export class createTaskDto{
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title:string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description:string;

}

export class updateDto{

  @IsString()    
  @IsOptional()
  title ?: string;
  
  @IsString()
  @IsOptional()
  description ?:string;
  
  @IsString()
  @IsOptional()
  @IsEnum(TaskStatus)
  status ?: TaskStatus;

}