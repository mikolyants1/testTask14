import { IUser } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function getUser(id:number):Promise<IUser> {
    return await axios
    .get(`http://localhost:5000/user/${id}`)
    .then(({data}:AxiosResponse<IUser>)=>data);
}