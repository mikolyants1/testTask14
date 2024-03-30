import { Axios, IProduct } from "@/components/types/type";
import { baseUrl } from "../../baseUrl";

export async function clearBask(id:string):Promise<IProduct> {
  return baseUrl.delete<IProduct>(
  `/products/clear?userId=${id}`)
  .then(({data}:Axios<IProduct>)=>data)
}