'use sever';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

import { unstable_cache } from 'next/cache';

import request from '@/libs/request';

import CourePlayer from './components/CourePlayer';

const getData = async (slug: string) => {
  const data = await request<API.CourseMaterial>(`/v1/course_materials/${slug}`);
  return data;
};

const fetchData = unstable_cache(async (categoryId) => {
  try {
    const data = await request<API.GetCoursesResponse>(`/v1/categories/${categoryId}`);
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null;
  }
});

export default async function Page(props: { params: { slug: string; categoryId: string } }) {
  console.log('Page', props);
  const data = await getData(props.params.slug);
  const listData = await fetchData(props.params.categoryId);
  return (
    <div className="border-t border-dashed border-gray-200">
      {listData && <CourePlayer data={data} listData={listData} />}
    </div>
  );
}
