// pages/gallery/[id].tsx

import Link from 'next/link';
import photos, { Photo } from '@/lib/photos';
import PhotoCard from '@/components/Photocard';
import { generateStaticParams } from './generateStaticParams';

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: Photo = photos.find(p => p.id === id)!;

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/gallery'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to gallery
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  );
}

export { generateStaticParams };
