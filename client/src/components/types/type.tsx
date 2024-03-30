import { Dispatch, ReactNode, SetStateAction } from "react";
import { EOptimisticType } from "./enum";
import { AxiosResponse } from "axios";

export interface ILayoutProp {
    children:ReactNode
}

export interface IForm {
    name:string,
    password:string
}

export interface IUserProducts {
    bask_id:number,
    productId:number,
    count:number,
    user:IUser
}
export interface IField {
    name:"name"|"password"
};

export type Axios<T> = AxiosResponse<T>;

export interface IProduct {
    id:number,
    title:string,
    imageCover:string,
    price:number,
    rating:number
}

export interface IUser {
    id:string,
    name:string,
    password:string,
    products:IUserProducts[]
}

export interface IProdBody {
    productId:number,
    userId:string
}

export interface IAuth {
    success:boolean,
    user:undefined | IUser
}
export interface UserBody {
    name:string,
    password:string,
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

export interface IFilterPrice {
    first:number,
    second:number
}
export interface IFilterState {
    title:string,
    rating:number,
    price:IFilterPrice
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
    userId:string
}
export interface IFilterContext {
  set:Dispatch<SetStateAction<IFilterState>>
}