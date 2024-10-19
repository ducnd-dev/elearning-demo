'use client';
import { useEffect, useState } from 'react'

// type Props = {
//   height: string;
// }
const IframeHome = () => {
  const [iframeHeight, setIframeHeight] = useState('2794vh');

  useEffect(() => {
    const iframe = document.getElementById('iframe-home') as HTMLIFrameElement;
    
    const updateHeight = () => {
      if (iframe?.contentWindow?.document?.body?.scrollHeight) {
        const newHeight = iframe.contentWindow.document.body.scrollHeight;
        setIframeHeight(`${newHeight}px`);
      }
      console.log('iframe', iframe?.contentWindow?.document.body.scrollHeight);
    };

    if (iframe) {
      iframe.addEventListener('load', updateHeight);
      window.addEventListener('resize', updateHeight);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', updateHeight);
      }
      window.removeEventListener('resize', updateHeight);
    };
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