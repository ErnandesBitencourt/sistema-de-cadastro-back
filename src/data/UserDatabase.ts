import { user, userCreate, UserDeleteUsers} from "../model/user"
import { CustomError } from "../error/CustomError"
import { BaseDatabase } from "./BaseDataBase"

export class USerDatabase extends BaseDatabase{
    public insertUser = async (user: userCreate) =>{
        try{
            await BaseDatabase.connection
            .insert({
                id: user.id,
                name: user.name,
                age: user.age,
                email: user.email,
                address: user.addres,
                house: user.house
            })
            .into("Create_clientes_bemol");
        }catch(error:any){
            throw new CustomError(400,error.message || error.sqlMessage )
        }
    };

    public editUser = async(user: userCreate) =>{
        try{
            await BaseDatabase.connection
            .update({name:user.name,age:user.age,email:user.email,address:user.addres})
            .where({id:user.id})
            .into("Create_clientes_bemol");
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage )
        }
    }

    public deleteUser = async(id:UserDeleteUsers) => {
        try{
            await BaseDatabase.connection("Create_clientes_bemol")
            .delete()
            .where("id",id.id)
            
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage )
        }
    }
     public allUser = async() =>{
        try{
           const result = await BaseDatabase.connection("Create_clientes_bemol")
            .select("id", "name" , "age", "email" , "address", "house");
            return result
        }catch(error:any){
            throw new CustomError(400, error.message || error.sqlMessage)
        }
    }
};