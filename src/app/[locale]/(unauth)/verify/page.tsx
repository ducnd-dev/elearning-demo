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
const VerifyPage = async (props: { searchParams: { token: string } }) => {
  const token = props.searchParams.token;
  const { setUser } = useUser();
  const res =  await verify(token);
  setUser(res?.data);
  redirect('/dashboard');
}

export default VerifyPage