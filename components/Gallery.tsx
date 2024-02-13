import Link from 'next/link'
import Image from 'next/image'

import photos from '@/lib/photos'
import { motion } from "framer-motion";


// console.log(photos);

export default function Gallery() {
  return (
    <section className='mt-12'>
      <div className='container'>
        <ul className='mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {photos.map(({ id, img }) => (
            <li key={id} className='overflow-hidden'>
              <Link href={`/gallery/${id}`}>
              {img}
                <Image
                  alt=''
                  src={`/gallery/${img}`}
                  height={500}
                  width={500}
                  className='aspect-square 
                  w-full 
                  object-cover
                  transition 
                  hover:scale-[1.04]
                  '
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}