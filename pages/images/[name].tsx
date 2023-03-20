import Image from 'next/image';
import { useState } from 'react'
import { getAllImageNames,getImageData } from '../../lib/images';


export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const imageData = await getImageData(params.name);

    return {
        props: {
            imageData,
            name: params,
        },
    };
}

export async function getStaticPaths() {
    const images = getAllImageNames();
    let sets = await images;

    return {
        paths: sets,
        fallback: false,
    };
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function BlurImage({ imageData }) {
    const [isLoading, setLoading] = useState(true)
    return (
        <a href={imageData} className="group">
            <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full
            overflow-hidden rounded-lg bg-gray-200">
                <Image
                    alt=""
                    src={imageData}
                    width="300"
                    height="300"
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
        </a>

    );
}