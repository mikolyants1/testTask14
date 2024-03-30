import { Axios, IProdBody, IProduct } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function delProductFromBak({productId,userId}:IProdBody):Promise<IProduct> {
    return baseUrl.delete<IProduct>(
    `/products/bask/${productId}?userId=${userId}`)
    .then(({data}:Axios<IProduct>)=>data)
}