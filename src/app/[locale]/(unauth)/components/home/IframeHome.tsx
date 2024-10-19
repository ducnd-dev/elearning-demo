'use client';
import { useEffect, useState } from 'react'

// type Props = {
//   height: string;
// }
const IframeHome = () => {
  const [iframeHeight, setIframeHeight] = useState('2794vh');

  useEffect(() => {
    const iframe = document.getElementById('iframe-home') as HTMLIFrameElement;
    if (iframe) {
      const updateHeight = () => {
        setIframeHeight('2794vh');
      };
      console.log(iframe?.contentWindow?.document.body.scrollHeight);
      iframe.addEventListener('load', updateHeight);
      window.addEventListener('resize', updateHeight);

      return () => {
        iframe.removeEventListener('load', updateHeight);
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, []);
  return (
    <iframe 
    id='iframe-home' 
    src="https://builderjs.cuongdesign.net/templates/default/ColleagueCourses" 
    style={{ height: iframeHeight, width: '100%', border: 'none', overflow: 'hidden' }}
    ></iframe>
  )
}

export default IframeHome