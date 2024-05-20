'use server';

import { authKey } from '@/constants/authKey';
import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';

const setAccessToken = (token: string, option?: any) => {
   cookies().set(authKey, token);
   if (option  && option.redirect) {
    redirect(option.redirect);
 }
//    redirect('/dashboard')
//    if (option && option.passwordChangeRequired) {
//       redirect('/dashboard/change-password');
//    }
   
};

export default setAccessToken;
