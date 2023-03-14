import Image from 'next/image';
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function getStaticProps() {

    const { data } = await supabaseAdmin.storage.from("image-bucket").list();

    return {
        props: {
            images: data,
        },
    }
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type Image = {
    id: number
    href: string 
    imageSrc: string 
    name: string 
    username: string
    width: string
    height: string

 }

export function getImagePath({ image }: { image: Image }) {

    const image_path = supabaseAdmin.storage.from("image-bucket").getPublicUrl(image.name);
    return image_path.data.publicUrl;
}

export default function Gallery({ images }: {images: Image[]}) {
    return (
       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24
        sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2
            gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {images.map((image) => (
                    <BlurImage key={image.id} image={
                        
                        getImagePath({ image })
                        
                } />
                ))}
            </div>
        </div> 

    );
}

function BlurImage({ image }: {image: string}) {
    const [isLoading, setLoading] = useState(true)

    return (
        <a href={image} className="group">
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full
            overflow-hidden rounded-lg bg-gray-200">
                <Image
                    alt=""
                    src={image}
                    width="300"
                    height="300"
                    objectFit="cover"
                    className={cn(
                        "group-hover:opacity-75 duration-700 ease-in-out",
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoadingComplete={()=>setLoading(false) }
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Lucas harlor</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">@lharlor</p>
        </a>

    );
}