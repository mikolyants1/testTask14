"use client"

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styles from '@/components/style/main.module.css';
import { IDataState, IFilterState, IProduct } from '@/components/types/type';
import { Context } from '@/components/helpers/state/context';
import { searchState } from '@/components/helpers/state/searchState';
import PriceSelectContainer from './select/PriceSelectContainer';
import RatingSelectCard from './select/RatingSelectCard';
import { comparePrice } from '@/components/helpers/functions/compare';

interface IProps {
  set:Dispatch<SetStateAction<IDataState>>,
  base:IProduct[]
}

function SearchContainer({set,base}:IProps):JSX.Element {
  const [state,setState] = useState<IFilterState>(searchState(base))

  const change = ({target}:ChangeEvent<HTMLInputElement>):void => {
    const title:string = target.value.trim().toLowerCase(); 
    setState((prv:IFilterState)=>({...prv,title}));
  }

  const filterHandler = ():void => {
    const filter:IProduct[] = base.filter((i:IProduct)=>(
      i.title.trim().toLowerCase().includes(state.title)
    )).filter((i:IProduct)=>{
      const isInit:boolean = state.rating == -1;
      if (isInit) return true;
      return i.rating >= state.rating;
    })
    .filter((i:IProduct)=>comparePrice(i.price,state.price));
    set((prv:IDataState)=>({...prv,filter}));
  }

  const dropOptions = ():void => {
    setState(searchState(base));
  }

  return (
      <Context.Provider value={{set:setState}}>
        <aside className={styles.search}>
          <div className={styles.title}>
            Filter Aside
          </div>
          <div className={styles.searchMain}>
            <input type="text"
             className={styles.searchInput}
             value={state.title}
             placeholder="title"
             onChange={change}
             />
            <PriceSelectContainer />
            <RatingSelectCard
             rating={state.rating}
             />
            <button onClick={filterHandler}
             className={styles.filterButton}>
             search
            </button>
          </div>
          <div onClick={dropOptions}
           className={styles.reset}>
            drop options
          </div>
        </aside>
      </Context.Provider>
  )
}

export default SearchContainer