import { EOptimisticType } from "@/components/types/enum";
import { IOptimisticAction, IProduct, IUserBask } from "@/components/types/type";

export const optimisticAction = (
    state:IUserBask[],
    {payload,type}:IOptimisticAction
 ):IUserBask[] =>{
   switch (type) {
    case EOptimisticType.CLEAR:{
      if (Array.isArray(payload)){
        return [];
      }
    };
    case EOptimisticType.DEL:{
      if (typeof payload == "number"){
        return state.filter((i:IUserBask)=>i.product.id !== payload);
      }
    }
    default:
    return state;
   }
}