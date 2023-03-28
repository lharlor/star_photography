import { getImageInfo } from '../lib/images'
import { Nav } from '../lib/nav_toolbar';
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


export async function getStaticProps() {
    const imageInfo = getImageInfo();
    const resolved = await imageInfo;

    console.log(resolved);
    return {
        props: {
            allImageData: resolved.data,
        },
    }
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Gallery({ allImageData }) {
    const [isLoading, setLoading] = useState(true);
    return (

       <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12
        sm:px-6 lg:max-w-7xl lg:px-8">
            <Nav />
            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2
            gap-x-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
                {allImageData.map(({ id, name, imageSrc, username, comments }) => (
                    <div>
                        <Link href={`/images/${name}`}>
                            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full
                            overflow-hidden rounded-lg bg-gray-200">
                                <Image
                                    alt=""
                                    src={imageSrc}
                                    width="80"
                                    height="80"
                                    className={cn(
                                        "group-hover:opacity-75 duration-700 ease-in-out",
                                        isLoading
                                            ? 'grayscale blur-2xl scale-110'
                                            : 'grayscale-0 blur-0 scale-100'
                                    )}
                                    onLoadingComplete={() => setLoading(false)}
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{username}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{comments}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div> 
    );
}
