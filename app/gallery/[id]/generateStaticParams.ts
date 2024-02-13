// pages/gallery/generateStaticParams.ts

import photos from '@/lib/photos';

export async function generateStaticParams() {
  const ids = photos.map(photo => ({
    params: { id: photo.id }
  }));
  return ids;
}
