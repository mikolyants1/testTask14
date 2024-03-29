import { IForm } from '@/components/types/type';
import { TextInput } from '@gravity-ui/uikit';
import styles from '../../style/login.module.css';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface IProps {
    Name:"name"|"password"
}

function LoginInput({Name}:IProps):JSX.Element {
  const {control} = useFormContext<IForm>();

  return (
    <>
     <Controller
      control={control}
      name={Name}
      render={({field:{onChange,name,value}}):JSX.Element=>(
        <input
         className={styles.input}
         placeholder={Name}
         onChange={onChange}
         value={value}
         name={name}
        />
      )}
     />
    </>
  )
}

export default LoginInput