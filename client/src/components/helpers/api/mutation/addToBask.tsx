import { IProdBody, IProduct } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function addToBask(body:IProdBody):Promise<IProduct> {
    return await axios.post("http://localhost:5000/products",body)
    .then(({data}:AxiosResponse<IProduct>)=>data);
}