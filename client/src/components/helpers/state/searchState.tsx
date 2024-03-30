import { IFilterState, IProduct } from "@/components/types/type";
import { getMax } from "../functions/getMax";

export const searchState = (base:IProduct[]):IFilterState => {
  const maxPrice:number = getMax(base,"price");
  return {
    rating: -1,
    title:"",
    price:{
      first:0,
      second:maxPrice
    }
  }
}