import { IProduct, IUserBask } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function getBask(id:string):Promise<IUserBask[]> {
    return await axios
    .get(`http://localhost:5000/products/bask/${id}`)
    .then(({data}:AxiosResponse<IUserBask[]>)=>data)
}