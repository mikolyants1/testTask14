import { IUser, UserBody } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function addUser(body:UserBody):Promise<IUser> {
    return await axios.post("http://localhost:5000/user",body)
    .then(({data}:AxiosResponse<IUser>)=>data);
}