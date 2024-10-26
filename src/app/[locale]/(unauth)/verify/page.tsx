'use client';
import request from '@/libs/request'
import { useUser } from '@/stores/auth-store';
import { Spin } from 'antd';
import { getCookie, setCookie } from 'cookies-next';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const verify = async (token: string) => {
  try {
    setCookie('token', token);
    const res = await request<API.GetUser>('/v1/users/profile/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    console.error('Error fetching data:', error);
    redirect('/');
  }
}

const VerifyPage = async () => {
  const seachParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useUser();
  useEffect(() => {
    verify(seachParams.get('token') || '').then((res) => {
      setUser(res.data);
      const action = seachParams.get('action');
      router.push(action === 'login' ? '/learn/auth/1/1' : '/dashboard');
    });
    return () => { };
  }, []);
  return <Spin />;
}

export default VerifyPage;