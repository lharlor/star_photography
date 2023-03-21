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

export default function BlurImage({ imageData }) {
    return (
        <a>imageData</a>
    );
}