import { EOptimisticType } from "@/components/types/enum";
import { IOptimisticAction, IUserBask } from "@/components/types/type";

export const optimisticAction = (
  state:IUserBask[],
  action:IOptimisticAction
 ):IUserBask[] =>{
  switch (action.type) {
    case EOptimisticType.CLEAR:
      if (Array.isArray(action.payload)){
        return [];
      };
    case EOptimisticType.DEL:
      if (typeof action.payload == "number"){
        return state.filter((i:IUserBask)=>(
          i.product.id !== action.payload
        ));
      };
    default:
    return state;
  }
}