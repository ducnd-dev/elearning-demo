'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getI18nPath } from '@/utils/Helpers';
import request from '@/libs/request';
import { setCookie } from 'cookies-next';
import { Spin } from 'antd';

const SignInPage = (props: { params: { locale: string } }) => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (user) {
      const authenticateOrRegister = async () => {
        const response = await request<API.Login>('/v1/auth/login-or-register', {
          method: 'POST',
          body: JSON.stringify({
            first_name: user?.firstName,
            last_name: user?.lastName,
            email: user?.primaryEmailAddress?.emailAddress
          }),
        });
        setCookie('token', response.data.access_token);
        setCookie('user', JSON.stringify(response.data.user));
        window.location.href = '/learn/auth/1/1';
      };

      try {
        authenticateOrRegister();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
  }, [user, router]);

  return (
    <Spin spinning={loading}>
      <SignIn path={getI18nPath('/sign-in', props.params.locale)} />
    </Spin>
  );
};

export default SignInPage;
