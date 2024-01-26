// import { Model } from "sequelize";
import { Table ,Column, Model, DataType} from "sequelize-typescript";


export enum TaskStatus{
   PENDING = 'PENDING',
   IN_PROGRESS  = 'IN_PROGRESS',
   DONE = 'DONE',

}
@Table({
   timestamps:false,
})
// @Table
export class Task extends Model{
   @Column({
   type:DataType.INTEGER,
   primaryKey:true,
   autoIncrement:true,
   })
   id: number;

   @Column
   title:string;
   @Column
   description:string;
   @Column
   status : TaskStatus;  
}
