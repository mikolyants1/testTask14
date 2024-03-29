import { IProduct } from "@/components/types/type";
import axios, { AxiosResponse } from "axios";

export async function getProducts():Promise<IProduct[]> {
    return await axios.get("http://localhost:5000/products")
    .then(({data}:AxiosResponse<IProduct[]>)=>data);
}