"use client"

import { IDataState, IProduct } from '@/components/types/type'
import React, { useState } from 'react'
import styles from "@/components/style/main.module.css";
import MainProdCard from './content/products/MainProdCard';
import SearchContainer from './content/search/SearchContainer';

interface IProps {
  data:IProduct[]
}

function MainMapCard({data}:IProps):JSX.Element {
  const [state,setState] = useState<IDataState>({
    filter:data,
    initial:data
  });

  return (
    <>
      <SearchContainer
       base={state.initial}
       set={setState}
       />
      <div className={styles.main}>
       {state.filter.map((i:IProduct):JSX.Element=>(
         <MainProdCard key={i.id} {...i} />
        ))}
      </div>
    </>
  )
}

export default MainMapCard