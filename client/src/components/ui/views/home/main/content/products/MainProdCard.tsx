"use client"

import Image from 'next/image';
import styles from '@/components/style/main.module.css';
import { addToBask } from '@/components/helpers/api/mutation/bask/addToBask';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

interface IProps {
    key:number,
    id:number,
    imageCover:string,
    title:string,
    price:number,
    rating:number
}

function MainProdCard({id,imageCover,title,price,rating}:IProps):JSX.Element {
  const params:ReadonlyURLSearchParams = useSearchParams();
  return (
    <div className={styles.card}>
      <Image
       height={300}
       width={350}
       src={imageCover}
       alt=""
      />
      <div className={styles.cardTitle}>
        {title}
      </div>
      <div className={styles.cardDop}>
        <div style={{fontSize:20}}>
          {rating}
          <span style={{color:"gold"}}>
             &#9733;
          </span>
        </div>
        <div>
           {price}.000
        </div>
      </div>
      <button onClick={()=>addToBask({
        userId:`${params.get("id")}`,
        productId:id
      })}
       className={styles.button}>
        add to bask
      </button>
    </div>
  )
}

export default MainProdCard