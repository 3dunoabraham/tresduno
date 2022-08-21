import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'


type Image = {
  id: number,
  href: string,
  src: string,
  name: string,
}

function Gallery({ images }: { images: Image[]}) {
  return (
    <div>
      <h1>Title</h1>
      
      {/* Images will go here */}
      <div className="flex-column">
        {images.map((image) => (
          <div key={image.id}>
            <BlurImage image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Image2() {
  return (
    <i>Text</i>
  )
}
function BlurImage({ image }: { image: Image}) {
  return (
    <i>{image.name}</i>
  )
}

export default Gallery

export const getStaticProps = async () => {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  )

  const { data } = await supabaseAdmin
  .from('images')
  .select('*')
  .order('id')

  console.log("data",data)

  return {
    props: {
      images: data,
    },
  }
}