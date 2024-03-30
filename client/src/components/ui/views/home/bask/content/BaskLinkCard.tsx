"use client"

import React, { useContext } from 'react'
import styles from '@/components/style/bask.module.css';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { clearBask } from '@/components/helpers/api/mutation/bask/clearBask';
import { IOptimisticContext } from '@/components/types/type';
import { OptimisticContext } from '@/components/helpers/state/context';
import { EOptimisticType } from '@/components/types/enum';

interface IProps {
    length:number,
}
function BaskLinkCard({length}:IProps):JSX.Element {
  const router:AppRouterInstance = useRouter();
  const {func,userId} = useContext<IOptimisticContext>(OptimisticContext);

  const clear = async ():Promise<void> => {
    func({
      type:EOptimisticType.CLEAR,
      payload:[]
    }); 
    await clearBask(userId);
  }

  return (
    <div className={styles.linkContainer}>
      <div onClick={router.back.bind(router)}
       className={styles.link}>
          back home
      </div>
      {Boolean(length)&&(
        <form action={clear}>
          <button type="submit"
           className={styles.button}>
            clear bask
          </button>
        </form>
      )}
    </div>
  )
}

export default BaskLinkCard