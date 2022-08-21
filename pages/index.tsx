import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getStaticPropos() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  )

  const { data } = await supabaseAdmin
  .from('images')
  .select('*')
  .order('id')
  return {
    props: {
      images: data,
    },
  }
}


export default function Gallery() {
  return (
    <div>
      {/* Images will go here */}
      <Image2 />
    </div>
  )
}

function Image2() {
  return (
    <i>Text</i>
  )
}
function BlurImage() {
  return (
    <i>Text</i>
  )
}

