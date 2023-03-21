import FileObject from 'next/app';
import { getImageData,getAllImageData } from '../lib/images'
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';


export async function getStaticProps() {
    const allImageData = getAllImageData();
    const resolved = await allImageData;
    return {
        props: {
            allImageData: resolved,
        },
    }
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Gallery({ allImageData }: { allImageData: FileObject[] }) {
    const [isLoading, setLoading] = useState(true);
    return (
       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24
        sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2
            gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {allImageData.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`/images/${name}`}>
                            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full
                            overflow-hidden rounded-lg bg-gray-200">
                                <Image
                                    alt=""
                                    src={`https://mphoimujumzasrbtyzhr.supabase.co/storage/v1/object/public/image-bucket/${name}`}
                                    width="50"
                                    height="50"
                                    objectFit="cover"
                                    className={cn(
                                        "group-hover:opacity-75 duration-700 ease-in-out",
                                        isLoading
                                            ? 'grayscale blur-2xl scale-110'
                                            : 'grayscale-0 blur-0 scale-100'
                                    )}
                                    onLoadingComplete={() => setLoading(false)}
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">Lucas harlor</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">@lharlor</p>
                        </Link>
                    </li>
                ))}
            </div>
        </div> 
    );
}
