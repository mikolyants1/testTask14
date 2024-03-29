import { IAuth, UserBody } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function checkUser(body:UserBody):Promise<IAuth> {
    return await axios.post("http://localhost:5000/user/check",body)
    .then(({data}:AxiosResponse<IAuth>)=>data);
}