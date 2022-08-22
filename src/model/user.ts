

export type  user = { 
    id:string
    name:string
    age:number
    email:string
    address:string
    house:number
    

};export type  userCreate = { 
   id:string
   name:string
   age:number
   email:string
   addres:string
   house:number
};


export interface UserInputCreate{
    
    name:string
    age:number
    email:string
    address:string
    house:number
 };
 
 export interface UserInput {
    name:string
    age:number
    email:string
    address:string
    house:number
 };

 export interface UserInputCreateEdite{
    id:string
    name:string
    age:number
    email:string
    address:string
    house:number
 };
 export interface UserDeleteUsers{
   id:string
 }

 export interface UserCreate{
   id:string
   name:string
   age:number
   email:string
   addres:string
   house:number
};