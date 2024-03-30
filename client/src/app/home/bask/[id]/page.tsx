import { getBask } from '@/components/helpers/api/query/bask/getBask';
import { IParams, IProduct, IUserBask } from '@/components/types/type';
import styles from '@/components/style/bask.module.css'
import React, { use } from 'react'
import BaskMapCard from '@/components/ui/views/home/bask/BaskMapCard';

function page({params:{id}}:IParams):JSX.Element {
  const bask:IUserBask[] = use(getBask(id));
  return (
    <div className={styles.baskContainer}>
      <BaskMapCard data={bask} id={id} />
    </div>
  )
}

export default page