'use server';
import request from '@/libs/request'
import { useUser } from '@/stores/auth-store';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

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

const VerifyPage = async (props: { searchParams: { token: string, action: string } }) => {
  const token = props.searchParams.token;
  const action = props.searchParams.action;
  const { setUser } = useUser();
  const res =  await verify(token);
  setUser(res?.data);
  redirect(action === 'register' ? '/dashboard' : '/learn/auth/1/1');
}

export default VerifyPage