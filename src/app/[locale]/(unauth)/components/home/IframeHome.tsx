// 'use client';
// import { useEffect, useState } from 'react'

type Props = {
  height: string;
}
const IframeHome = (props: Props) => {
  // const [iframeHeight, setIframeHeight] = useState('600vh');

  // useEffect(() => {
  //   const iframe = document.getElementById('iframe-home') as HTMLIFrameElement;
  //   if (iframe) {
  //     const updateHeight = () => {
  //       setIframeHeight(`${iframe?.contentWindow?.document.body.scrollHeight}px`);
  //     };
  //     // console.log(iframe?.contentWindow?.document.body.scrollHeight);
  //     iframe.addEventListener('load', updateHeight);
  //     window.addEventListener('resize', updateHeight);

  //     return () => {
  //       iframe.removeEventListener('load', updateHeight);
  //       window.removeEventListener('resize', updateHeight);
  //     };
  //   }
  // }, []);
  return (
    <iframe 
    id='iframe-home' 
    src="https://builderjs.cuongdesign.net/templates/default/ColleagueCourses" 
    style={{ height: "2794vh", width: '100%', border: 'none', overflow: 'hidden' }}
    ></iframe>
  )
}

export default IframeHome