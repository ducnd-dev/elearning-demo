'use client';
import request from '@/libs/request';
import { useUser } from '@/stores/auth-store';
import { Spin } from 'antd';
import { setCookie } from 'cookies-next';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

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
};

const VerifyComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    verify(searchParams.get('token') || '').then((res) => {
      setUser(res.data);
      const action = searchParams.get('action');
      router.push(action === 'login' ? '/learn/auth/1/1' : '/dashboard');
    });
    return () => {};
  }, [searchParams, router, setUser]);

  return <Spin />;
};

const VerifyPage = () => {
  return (
    <Suspense fallback={<Spin />}>
      <VerifyComponent />
    </Suspense>
  );
};

export default VerifyPage;
