import { IContext, IFilterState } from '@/components/types/type'
import React, { ChangeEvent, Dispatch, SetStateAction, memo, useContext } from 'react'
import styles from '../../style/main.module.css';
import { Context } from '@/components/helpers/context';

function SearchSelect():JSX.Element {
 const {set} = useContext<IContext>(Context);
 const values:number[] = [0,20,40,60,80,100,120,140];
 
 const selectHandler = (e:ChangeEvent<HTMLSelectElement>):void => {
    set((prv:IFilterState)=>({
     ...prv,price:{
       ...prv.price,[e.target.name]:Number(e.target.value)
      }
    }))
  }
    
  return (
         <div className={styles.select}>
           <select name="first"
            onChange={selectHandler}
            style={{backgroundColor:"black"}}>
            {values.map((i:number):JSX.Element=>(
             <option value={i} key={i}>
                {i}
             </option>
            ))}
           </select>
           <div>
             between
           </div>
           <select name="second"
            onChange={selectHandler}
            style={{backgroundColor:"black"}}>
            {values.map((i:number):JSX.Element=>(
             <option value={i} key={i}>
                {i}
             </option>
            ))}
           </select>
         </div>
  )
}

export default memo(SearchSelect)