'use client';
import PlyrPlayer from '@/components/Plyr';
import { getVideoUrl } from '@/libs/common';
import { getCookie } from 'cookies-next';

import { useEffect, useState } from 'react';

export default function VideoPage(props: { params: { locale: string; videoId: string } }) {
  const [videoUrl, setVideoUrl] = useState('');
  useEffect(() => {
      const token = getCookie('token'); // Replace with your actual token
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      fetch(getVideoUrl(`/api/v1/file/${props.params.videoId}/stream`), { headers })
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
        })
        .catch(error => console.error('Error fetching video:', error));
  }, [props.params.videoId]);

  return (
    // <video
    //   ref={videoRef}
    //   controls
    //   controlsList="nodownload"
    //   autoPlay
    //   picture-in-picture
    //   className="aspect-video min-w-full"
    // >
    //   <track kind="captions" srcLang="en" src="/path/to/captions.vtt" default />
    // </video>
    <PlyrPlayer url={videoUrl} />
  );
}
