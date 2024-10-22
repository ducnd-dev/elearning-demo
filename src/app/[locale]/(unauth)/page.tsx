import '@/styles/home.css';
import '@/styles/root.css';

import IframeHome from './components/home/IframeHome';
import { FormLogin } from './components/login/FormLogin';

export default function Index() {
  return (
    <>
      {/* <div className="banner-receive txt-white layer-digital overflow-hidden">
        <TopSession />
        <ColleagueCourses />
        <ComingSoon />
        <ColleagueClubMask />
        <Benefit />
      </div>
      <CoursesPersonalizedData />
      <Intro />
      <Staff />
      <Faqs /> */}
      <div className='w-full hidden justify-end text-white'>
        <div className='w-1/3 mr-28 relative h-0'>
          <div className='absolute top-28 px-5'>
            <FormLogin />
          </div>
        </div>
      </div>
      <IframeHome />
    </>
  );
}
