import { IProduct } from "@/components/types/type";

export function getMax(base:IProduct[],key:"rating"|"price"):number{
  return Math.max(...base.map((i:IProduct)=>i[key]));
}