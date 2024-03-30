import { ILayoutProp } from '@/components/types/type'
import Header from '@/components/ui/views/home/Header'
import React from 'react'

function layout({children}:ILayoutProp) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default layout