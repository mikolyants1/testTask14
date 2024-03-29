import { Dispatch, ReactNode, SetStateAction } from "react";
import { EOptimisticType } from "./enum";

export interface ILayoutProp {
    children:ReactNode
}

export interface IForm {
    name:string,
    password:string
}

export interface IField {
    name:"name"|"password"
};


export interface IProduct {
    id:number,
    title:string,
    image:string,
    price:number,
    rating:number
}

export interface IUser {
    id:number,
    name:string,
    pass:string,
    products:number[]
}

export interface IProdBody {
    prodId:number,
    userId:number
}

export interface IAuth {
    success:boolean,
    user:undefined | IUser
}
export interface UserBody {
    name:string,
    pass:string,
    isLogin?:boolean
}

export interface IParams {
    params:{
      id:string
    }
}

export interface IDataState {
    initial:IProduct[],
    filter:IProduct[]
}

export interface IFilterState {
    title:string,
    rating:number,
    price:{
      first:number,
      second:number
    }
}
export interface IUserBask {
    product:IProduct,
    count:number
}
export interface IOptimisticAction {
    type:EOptimisticType,
    payload:[] | number
}

export interface IOptimisticContext {
    func:(action:IOptimisticAction)=>void,
    userId:number
}
export interface IContext {
  set:Dispatch<SetStateAction<IFilterState>>
}