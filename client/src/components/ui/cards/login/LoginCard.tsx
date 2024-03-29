"use client"

import { IAuth, IField, IForm } from '@/components/types/type';
import styles from '../../../style/login.module.css'
import { FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import { useState } from 'react';
import LoginInput from '../../inputs/LoginInput';
import { checkUser } from '@/components/helpers/api/query/checkUser';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { addUser } from '@/components/helpers/api/mutation/addUser';
import Link from 'next/link';

interface IProps {
  isLogin:boolean
}


function LoginCard({isLogin}:IProps):JSX.Element {
  const [error,setError] = useState<boolean>(false);
  const fileds:IField[] = [{name:"name"},{name:"password"}];
  const router:AppRouterInstance = useRouter();
  const form = useForm<IForm>({defaultValues:{
    name:"",
    password:""
  }});
  
  const {reset,handleSubmit} = form;

  const submit:SubmitHandler<IForm> = async (data):Promise<void> => {
     if (!data.name || !data.password){
       setError(true);
       reset();
       return;
     };
     const {success,user}:IAuth = await checkUser({
       name:data.name,
       pass:data.password,
       isLogin
     });
     if (!success){
        setError(true);
        reset();
        return;
     };
     if (isLogin){
      router.push(`/home/main?id=${user?.id}&name=${user?.name}`);
     } else {
      await addUser({
        name:data.name,
        pass:data.password
      })
    }
  }
  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        <div className={styles.title}>
          {isLogin ? "Login" : "Registration"}
        </div>
        <div className={styles.main}>
          {fileds.map(({name}:IField):JSX.Element=>(
            <LoginInput
              key={name}
              Name={name}
             />
          ))}
          <button
           onClick={handleSubmit(submit)}
           className={styles.button}>
             send
          </button>
          {error&&(
            <div className={styles.error}>
              login error
            </div>
          )}
          <div className={styles.link}>
            <Link style={{color:"black"}}
             href={isLogin ? "/regist" : "/"}>
              {isLogin ? "registration" : "login"}
            </Link>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default LoginCard