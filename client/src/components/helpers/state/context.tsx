import { createContext } from "react";
import { IFilterContext, IOptimisticContext } from "../../types/type";

export const FilterContext = createContext<IFilterContext>({} as IFilterContext);

export const OptimisticContext = createContext<IOptimisticContext>({} as IOptimisticContext);