import { Context } from '@/components/helpers/state/context'
import { IContext, IFilterState } from '@/components/types/type'
import styles from '@/components/style/main.module.css';
import {memo, useContext} from 'react'

interface IProps {
  rating:number
}

function RatingSelectCard({rating}:IProps):JSX.Element {
  const {set} = useContext<IContext>(Context);
  
  const click = (rating:number) => ():void => {
    set((prv:IFilterState)=>({...prv,rating}));
  }

  return (
    <div className={styles.ratingBlock}>
      {[1,2,3,4,5].map((i:number):JSX.Element=>(
        <div key={i}
         onClick={click(i)}
         className={styles.rating}
         style={{
          backgroundColor:`${i == rating ? "gold" : "black"}`,
          color:`${i == rating ? "black" : "white"}`
         }}>
           {i}
        </div>
      ))}
    </div>
  )
}

export default memo(RatingSelectCard)