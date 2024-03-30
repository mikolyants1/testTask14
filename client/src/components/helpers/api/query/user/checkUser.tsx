import { Axios, IAuth, UserBody } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function checkUser(body:UserBody):Promise<IAuth> {
    return baseUrl.post<IAuth>("/user/check",body)
    .then(({data}:Axios<IAuth>)=>data);
}