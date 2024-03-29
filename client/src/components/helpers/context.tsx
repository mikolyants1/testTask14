import { createContext } from "react";
import { IContext, IOptimisticContext } from "../types/type";

export const Context = createContext<IContext>({} as IContext);

export const OptimisticContext = createContext<IOptimisticContext>({} as IOptimisticContext);