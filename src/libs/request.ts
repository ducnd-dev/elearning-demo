import { getCookie } from 'cookies-next';

const defaultHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// function getCookie(name: string): string | null {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return parts.pop()?.split(';').shift() || null;
//   }
//   return null;
// }
export default async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  console.log('request', url);
  try {
    const token = getCookie('token') as string | null;
    console.log('token', token);

    const headers = options.headers
      ? { ...defaultHeader, ...options.headers, Authorization: token ? `Bearer ${token}` : '' }
      : { ...defaultHeader, Authorization: token ? `Bearer ${token}` : '' };
    const res = await fetch(`${baseUrl}${url}`, {
      headers,
      ...options,
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // check 401
    if (error instanceof Error && error.message.includes('401')) {
      console.error('Error fetching data:', error.message);
      // redirect to sign-in
    }
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
}
