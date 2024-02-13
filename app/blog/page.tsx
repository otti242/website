import Image from 'next/image'
import { createClient } from 'contentful';

const client = createClient({
  space: 'your-space-id',
  accessToken: 'your-access-token',
});


export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
     <h1>Blog</h1>
    </main>
  )
}
