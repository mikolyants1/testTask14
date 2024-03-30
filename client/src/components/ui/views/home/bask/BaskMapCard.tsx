"use client"

import { optimisticAction } from '@/components/helpers/functions/optimisticAction';
import { IProduct, IUserBask } from '@/components/types/type'
import React, { useOptimistic } from 'react'
import BaskLinkCard from './content/BaskLinkCard';
import { OptimisticContext } from '@/components/helpers/state/context';
import EmptyBaskCard from './content/EmptyBaskCard';
import BaskCard from './content/BaskCard';

interface IProps {
  data:IUserBask[],
  id:string
}

function BaskMapCard({data,id}:IProps):JSX.Element {
  const [optimistic,setOptimistic] = useOptimistic(data,optimisticAction);

  return (
    <OptimisticContext.Provider
     value={{func:setOptimistic,userId:id}}>
      <BaskLinkCard length={data.length} />
       {optimistic.length ? (
        <>
         {optimistic.map((i:IUserBask):JSX.Element=>(
          <BaskCard
           key={i.product.id}
           {...i.product}
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