'use client';
import { getVideoUrl } from '@/libs/common';
import { getCookie } from 'cookies-next';

import { useEffect, useRef } from 'react';

export default function VideoPage(props: { params: { locale: string; videoId: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const token = getCookie('token'); // Replace with your actual token
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      fetch(getVideoUrl(`/api/v1/file/${props.params.videoId}/stream`), { headers })
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          videoRef.current!.src = url;
        })
        .catch(error => console.error('Error fetching video:', error));
    }
  }, [props.params.videoId]);

  return (
    <video
      ref={videoRef}
      controls
      controlsList="nodownload"
      autoPlay
      picture-in-picture
      className="aspect-video min-w-full"
    >
      <track kind="captions" srcLang="en" src="/path/to/captions.vtt" default />
    </video>
  );
}
