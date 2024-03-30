import { Axios, IUserBask } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function getBask(id:string):Promise<IUserBask[]> {
    return baseUrl.get<IUserBask[]>(`/products/bask/${id}`)
    .then(({data}:Axios<IUserBask[]>)=>data)
}