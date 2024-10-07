'use sever';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

import { unstable_cache } from 'next/cache';

import request from '@/libs/request';

import CourePlayer from './components/CourePlayer';

const getData = async (slug: string) => {
  const data = await request<API.Course>(`/v1/course-materials/${slug}`);
  return data;
};

const fetchData = unstable_cache(async () => {
  try {
    const data = await request<API.GetCoursesResponse>('/v1/categories');
    return data as API.GetCoursesResponse;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null; // Ensure a value is always returned
  }
});

export default async function Page(props: { params: { slug: string } }) {
  const data = await getData(props.params.slug);
  const listData = await fetchData();
  return (
    <div className="border-t border-dashed border-gray-200">
      <CourePlayer data={data} listData={listData} />
    </div>
  );
}
