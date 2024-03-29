"use client"

import { optimisticAction } from '@/components/helpers/functions/optimisticAction';
import { IProduct, IUserBask } from '@/components/types/type'
import React, { useOptimistic } from 'react'
import BaskLinkCard from './item/BaskLinkCard';
import { OptimisticContext } from '@/components/helpers/context';
import EmptyBaskCard from './item/EmptyBaskCard';
import BaskCard from './item/BaskCard';

interface IProps {
  data:IUserBask[],
  id:number
}

function BaskMapCard({data,id}:IProps):JSX.Element {
  const [optimistic,setOptimistic] = useOptimistic(data,optimisticAction);

  return (
    <OptimisticContext.Provider
     value={{func:setOptimistic,userId:id}}>
      <BaskLinkCard
       isLength={data.length}
       />
       {optimistic.length ? (
        <>
          {optimistic.map((i:IUserBask):JSX.Element=>(
            <BaskCard
             key={i.product.id}
             title={i.product.title}
             rating={i.product.rating}
             image={i.product.image}
             price={i.product.price}
             id={i.product.id}
             count={i.count}
            />
          ))}
        </>
       ) : (
        <EmptyBaskCard />
       )}
    </OptimisticContext.Provider>
  )
}

export default BaskMapCard