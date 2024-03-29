"use client"

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styles from '../../../style/main.module.css';
import { IDataState, IFilterState, IProduct } from '@/components/types/type';
import { getMax } from '@/components/helpers/functions/getMax';
import SearchSelect from '../../inputs/SearchSelect';
import RatingSelectCard from '../../cards/main/RatingSelectCard';
import { Context } from '@/components/helpers/context';

interface IProps {
  set:Dispatch<SetStateAction<IDataState>>,
  base:IProduct[]
}

function SearchContainer({set,base}:IProps):JSX.Element {
  const maxRating:number = getMax(base,"rating");
  const maxPrice:number = getMax(base,"price");
  const [state,setState] = useState<IFilterState>({
    rating:maxRating + 1,
    title:"",
    price:{first:0,second:maxPrice}
  })

  const change = ({target}:ChangeEvent<HTMLInputElement>):void => {
    const title:string = target.value.trim().toLowerCase(); 
    setState((prv:IFilterState)=>({...prv,title}));
  }

  const filterHandler = ():void => {
    const newProducts:IProduct[] = base.filter((i:IProduct)=>(
      i.title.toLowerCase().includes(state.title)
    ))
    .filter((i:IProduct)=>(
      i.rating >= state.rating
    ))
    .filter((i:IProduct)=>(
      i.price >= state.price.first
        &&
      i.price <= state.price.second
    ));

    set((prv:IDataState)=>({
      ...prv,filter:newProducts
    }));
  }

  const dropOptions = ():void => {
    setState({
      rating:maxRating + 1,
      title:"",
      price:{first:0,second:maxPrice}
    });
  }

  return (
      <Context.Provider value={{set:setState}}>
        <aside className={styles.search}>
          <div className={styles.title}>
            Filter Aside
          </div>
          <div className={styles.searchMain}>
            <input
             className={styles.searchInput}
             placeholder="title"
             type="text"
             onChange={change}
             />
            <SearchSelect />
            <RatingSelectCard
             rating={state.rating}
             />
            <button onClick={filterHandler}
             className={styles.filterButton}>
             search
            </button>
          </div>
          <div className={styles.reset}
           onClick={dropOptions}>
            drop options
          </div>
        </aside>
      </Context.Provider>
  )
}

export default SearchContainer