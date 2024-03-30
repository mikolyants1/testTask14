import { Axios, IProdBody, IProduct } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function addToBask(body:IProdBody):Promise<IProduct> {
    return baseUrl.post<IProduct>("/products",body)
    .then(({data}:Axios<IProduct>)=>data);
}