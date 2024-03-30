import { Axios, IUser, UserBody } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function addUser(body:UserBody):Promise<IUser> {
    return baseUrl.post<IUser>("/user",body)
    .then(({data}:Axios<IUser>)=>data);
}