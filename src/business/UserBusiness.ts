import { match } from "assert";
import { Console } from "console";
import { USerDatabase } from "../data/UserDatabase";
import { CustomError,InvalideName,InvalideEmail,InvalideIdade, InvallideCep, Invalidehouse } from "../error/CustomError";
import { UserInputCreateEdite ,UserInput, UserDeleteUsers, userCreate} from "../model/user";
import { checkAddress, getAddress } from "../services/getAddressinfo";


export class UserBusiness {
    public createUser = async (input:UserInput) =>{
        
            const {name,age,email,address,house} = input;
            if(!name || !age || !email || !address ||!house ) {
                throw new CustomError(
                    400,'Preencha os campos "name","idade", "email" , "endereço" e o "numero da casa"'
                )
            };
            if(name.length <3){
                throw new InvalideName();
            };
            if(!email.includes("@")){
                throw new InvalideEmail();
            };

            if(age < 18){
                throw new InvalideIdade();
            };
            if(house < 0){
                throw new Invalidehouse();
            }
            const check = await checkAddress(address) 
            if(check.uf !== "AM"){
                throw new InvallideCep();
            }

            const addres = await getAddress(address)

            const id :string =Date.now().toString();
            
            const user:userCreate = {
                id,
                name,
                age,
                email,
                addres,
                house
            }
            const userDatabase = new USerDatabase();
            await userDatabase.insertUser(user) 
            
        
    }
    
    public editUSer =async(input: UserInputCreateEdite) => {
        try{
            const {id, name,age,email,address,house} = input;
            if( !id || !name || !age || !email || !address || !house ) {
                throw new CustomError(
                    400,'Preencha os campos "name","idade", "email" , "endereço" e o "numero da casa"'
                )
            };
            if(name.length <3){
                throw new InvalideName();
            };
            if(!email.includes("@")){
                throw new InvalideEmail();
            };

            if(age < 18){
                throw new InvalideIdade();
            };
            
            const check = await checkAddress(address) 
            if(check.uf !== "AM"){
                throw new InvallideCep();
            }

            const addres = await getAddress(address)

            const editUSerInput : userCreate = {
                id,
                name,
                age,
                email,
                addres,
                house
            };

            const userDatabase = new USerDatabase();
            await userDatabase.editUser(editUSerInput);
        }
        catch (error:any) {
            throw new CustomError(400,error.message)
        }
    };
    
    public allUser  = async () => {
       
        const userDB = new USerDatabase()
        const resultAlluser = await userDB.allUser()
        return resultAlluser 
    }

    public deleteUser = async (id:UserDeleteUsers) => {
        try { 
            const idUser :UserDeleteUsers = id
            const userDatabase = new USerDatabase()

            await userDatabase.deleteUser(idUser)

        }catch(error :any){
            throw new CustomError(400, error.message)
        };
        
    }

};