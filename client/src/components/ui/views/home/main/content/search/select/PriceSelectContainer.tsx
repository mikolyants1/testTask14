import React, { memo} from 'react'
import styles from '@/components/style/main.module.css';
import PriceSelectCard from './options/PriceSelectCard';

function PriceSelectContainer():JSX.Element {
  return (
    <div className={styles.select}>
      <PriceSelectCard name="first" />
        <div>
          between
        </div>
      <PriceSelectCard name='second' />
    </div>
  )
}

export default memo(PriceSelectContainer)