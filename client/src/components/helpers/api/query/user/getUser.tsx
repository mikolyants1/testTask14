import { Axios, IUser } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function getUser(id:number):Promise<IUser> {
    return baseUrl.get<IUser>(`/user/${id}`)
    .then(({data}:Axios<IUser>)=>data);
}