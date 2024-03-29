import axios, { AxiosResponse } from "axios";
import { IProduct } from "@/components/types/type";

export async function clearBask(id:number):Promise<IProduct> {
  return await axios
  .delete(`http://localhost:5000/products/clear?userId=${id}`)
  .then(({data}:AxiosResponse<IProduct>)=>data)
}