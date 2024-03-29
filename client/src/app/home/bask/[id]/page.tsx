import { getBask } from '@/components/helpers/api/query/getBask';
import { IParams, IProduct, IUserBask } from '@/components/types/type';
import styles from '@/components/style/bask.module.css'
import React, { use } from 'react'
import BaskMapCard from '@/components/ui/cards/bask/BaskMapCard';

function page({params}:IParams):JSX.Element {
  const products:IUserBask[] = use(getBask(params.id));
  return (
    <div className={styles.baskContainer}>
      <BaskMapCard
       data={products}
       id={Number(params.id)}
       />
    </div>
  )
}

export default page