'use server';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/payment.css';
import { revalidatePath } from 'next/cache';


const html = async () => {
  try {
    const response = await fetch('https://builderjs.cuongdesign.net/templates/default/ColleagueCourses-upgrade');
    const text = await response.text();
    return text;
  } catch {
    return '';
  }
};
export default async function LearnUpgradePage() {
  revalidatePath('https://builderjs.cuongdesign.net/templates/default/ColleagueCourses-upgrade');
  const data = await html();
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    ></div>
  );
}
