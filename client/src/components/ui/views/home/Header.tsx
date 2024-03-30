"use client"

import styles from '../../../style/header.module.css';
import Link from 'next/link';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function Header():JSX.Element {
  const params:ReadonlyURLSearchParams = useSearchParams();
  const path:string = usePathname();
  const isBask:boolean = path.includes("bask");
  const name:string = `${params.get("name")}`;
  const id:string = `${params.get("id")}`;
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          {name[0].toUpperCase()}
        </Link>
      </div>
      <div className={styles.name}>
        Shop
      </div>
      <div className={styles.link}>
       {!isBask&&(
        <Link href={`/home/bask/${id}`}>
          bask
        </Link>
        )}
      </div>
    </header>
  )
}

export default Header