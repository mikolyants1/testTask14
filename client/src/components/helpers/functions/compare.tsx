import { IFilterPrice } from "@/components/types/type";

export const comparePrice = (price:number,{first,second}:IFilterPrice) => {
    if (first == second) return price == first;
    else if (first > second){
      return price <= first && price >= second;
    } else {
      return price >= first && price <= second;
    }
}