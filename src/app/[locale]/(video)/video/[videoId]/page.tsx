import { getVideoUrl } from '@/libs/common';

export default function VideoPage(props: { params: { locale: string; videoId: string } }) {
  return (
    <video controls controlsList="nodownload" autoPlay picture-in-picture className="aspect-video min-w-full">
      <source src={getVideoUrl(`/api/v1/file/${props.params.videoId}/stream`)} type="video/mp4" />
      <track kind="captions" srcLang="en" src="/path/to/captions.vtt" default />
    </video>
  );
}
