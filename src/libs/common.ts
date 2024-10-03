export default function getUrlImage(url: string | null | undefined) {
  if (!url) {
    return process.env.NEXT_PUBLIC_IMAGE_DEFAULT;
  }
  if (url.startsWith('http')) {
    return url;
  } else {
    return process.env.NEXT_PUBLIC_MEDIA_URL + url;
  }
}
