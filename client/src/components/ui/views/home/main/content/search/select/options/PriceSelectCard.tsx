import { FilterContext } from '@/components/helpers/state/context';
import { IFilterContext, IFilterState } from '@/components/types/type';
import React, { ChangeEvent, useContext } from 'react'

interface IProps {
  name:string
}

function PriceSelectCard({name}:IProps):JSX.Element {
  const {set} = useContext<IFilterContext>(FilterContext);
  const values:number[] = [0,20,40,60,80,100,120,140];
    
  const selectHandler = (e:ChangeEvent<HTMLSelectElement>):void => {
    set((prv:IFilterState)=>({
      ...prv,price:{
        ...prv.price,[e.target.name]:Number(e.target.value)
      }
    }))
  }
       
  return (
    <select name={name}
     onChange={selectHandler}
     style={{backgroundColor:"black"}}>
     {values.map((i:number):JSX.Element=>(
       <option value={i} key={i}>
         {i}
       </option>
      ))}
    </select>
  )
}

export default PriceSelectCard