const defaultHeader = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export default async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  console.log('request', url);
  try {
    const headers = options.headers ? { ...defaultHeader, ...options.headers } : defaultHeader;
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
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Error fetching data:', error);
    }
    throw error;
  }
}
