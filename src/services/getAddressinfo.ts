import axios from "axios";
import {CustomError} from "../error/CustomError";

export const checkAddress = async (addressInf:string)=>{
    try {
        const url = `https://viacep.com.br/ws/${addressInf}/json/`;
        const res = await axios.get(url);
        const allAddressInf = res.data
        return allAddressInf;
    }
    catch(error:any){
        throw new CustomError(400,"Erro no viacep")
    }

};

export const getAddress = async (getAddressInf:string)=>{
    try {
        const url = `https://viacep.com.br/ws/${getAddressInf}/json/`;
        const res = await axios.get(url);
        const allAddressInf = `${res.data.logradouro}, ${res.data.bairro} - ${res.data.localidade}/${res.data.uf} - Cep:${res.data.cep} `;
        return allAddressInf;
    }
    catch(error:any){
        throw new CustomError(400,"Erro no viacep")
    }

};