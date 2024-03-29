import { IProdBody, IProduct } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function delProduct({prodId,userId}:IProdBody):Promise<IProduct> {
    return await axios
    .delete(`http://localhost:5000/products/bask/${prodId}?userId=${userId}`)
    .then(({data}:AxiosResponse<IProduct>)=>data)
}