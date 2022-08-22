import { Request , Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { UserInputCreate, UserInputCreateEdite, UserDeleteUsers} from "../model/user";


export class UserController { 

    public createUser = async(req:Request,res:Response) =>{
        try {
            const {name,age,email,address,house} = req.body;
            if (!name || !age || !email || !address || !house) {
                res.statusCode = 422
                throw "'name', 'age', 'email' ,'address' e 'numero da casa' são obrigatórios"
             }

             
            const input:UserInputCreate = {
               
                name,
                age,
                email,
                address,
                house
            };
            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)
            res.status(200).send({message: "Usuário criado!"});
        }catch(error ) {
            if (error instanceof CustomError) {
                res.status(error.status).send({ message: error.message })
            } else {
                res.status(400).send({ message: "Erro na requisição" })
            }
        }
    };

    public editUser = async (req:Request, res:Response) =>{
        try {
            const input: UserInputCreateEdite = {
                id:req.body.id,
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                address: req.body.address,
                house: req.body.house
        
            };
            const userBusiness= new UserBusiness()
            userBusiness.editUSer(input);
            res.status(200).send({message:"Usuário alterado com sucesso!"});
        }catch(error:any) {
            res.status(400).send(error.message);
        }
    };

    public allUser = async (req:Request, res:Response) =>{
        try{
            const users = new UserBusiness()
            const resultUsers = await users.allUser()
            res.status(200).send({resultUsers});
        }catch(error:any) {
        res.status(400).send(error.message);
        }
    };

    public deleteUsers =  async (req:Request, res:Response) =>{
        try{

        const userId:UserDeleteUsers = {
            id: req.params.id
        };
        const idUser = new UserBusiness()
        idUser.deleteUser(userId);
            res.status(200).send({message:"Usuário deletado com sucesso!"});
        }catch(error:any) {
            res.status(400).send(error.message);
        }
    }
};