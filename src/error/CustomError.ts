abstract class BaseError extends Error {

    constructor(public status: number, message: string) {
        super(message);
    }
}


export class CustomError extends BaseError {
    constructor(status:number,message:string){
        super(status, message )
    }
};

export class InvalideName extends CustomError{
    constructor(){
        super(400,"Nome invalido")
    }
};
export class InvalideEmail extends CustomError{
    constructor(){
        super(400,"Email invalido")
    }
};

export class InvalideIdade extends CustomError{
    constructor(){
        super(400,"Idade invalida, precisar ser maior de 18 anos")
    }
};

export class Ivalideaddress extends CustomError{
    constructor(){
        super(400,"Endereço invalido, você precisa morar no amazonas")
    }
};

export class InvallideCep extends CustomError{
    constructor(){
        super(400,"Cep invalido, cep precisa ser do AM!")
    }
}
export class Invalidehouse extends CustomError{
    constructor(){
        super(400,"numero invalido!")
    }
}



