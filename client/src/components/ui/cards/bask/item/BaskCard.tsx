import { OptimisticContext } from '@/components/helpers/context';
import { IOptimisticContext } from '@/components/types/type';
import styles from '@/components/style/bask.module.css';
import React, { useContext } from 'react'
import Image from 'next/image';
import { delProduct } from '@/components/helpers/api/mutation/delProduct';
import { EOptimisticType } from '@/components/types/enum';

interface IProps {
  id:number,
  title:string,
  image:string,
  price:number,
  rating:number,
  count:number
}
function BaskCard({id,title,image,price,rating,count}:IProps):JSX.Element {
  const {func,userId} = useContext<IOptimisticContext>(OptimisticContext);
  
  const delItem = async ():Promise<void> => {
    func({
      type:EOptimisticType.DEL,
      payload:id
    });

    await delProduct({userId,prodId:id});
  }

  return (
    <form action={delItem}>
      <div className={styles.baskItem}>
        <Image
         className={styles.image}
         height={350}
         width={400}
         src={image}
         alt=""
         />
        <div className={styles.baskTitle}>
          {title}
        </div>
        <div className={styles.baskDop}>
          <div>
            {rating}
            <span
             style={{color:"gold"}}>
               &#9733;
            </span>
          </div>
          <div>
            {price}.000
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.buttonBottom}>
            <button type="submit"
             className={styles.button}>
              delete
            </button>
          </div>
          <div className={styles.count}>
            <div className={styles.countCircle}>
              {count}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BaskCard