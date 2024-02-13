import Photos from '@/components/Gallery';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
     <h1>Gallery</h1>
     <Photos />
    </main>
  )
}
