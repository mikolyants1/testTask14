import { Axios, IProduct } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function getProducts():Promise<IProduct[]> {
    return baseUrl.get<IProduct[]>("/products")
    .then(({data}:Axios<IProduct[]>)=>data);
}