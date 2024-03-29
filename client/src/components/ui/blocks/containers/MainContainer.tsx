"use client"

import { IDataState, IProduct } from '@/components/types/type'
import React, { useState } from 'react'
import SearchContainer from './SearchContainer'
import MainProdCard from '../../cards/main/MainProdCard'
import styles from '../../../style/main.module.css';

interface IProps {
  data:IProduct[]
}

function MainContainer({data}:IProps):JSX.Element {
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
          <MainProdCard
           key={i.id}
           id={i.id}
           image={i.image}
           price={i.price}
           rating={i.rating}
           title={i.title}
          />
        ))}
      </div>
    </>
  )
}

export default MainContainer