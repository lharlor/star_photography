import Image from 'next/image';
import FileObject from 'next/app';
import { useState } from 'react'
import { getAllImageData } from '../lib/images'
import Link from 'next/link';


export async function getStaticProps() {
    const allImageData = getAllImageData();
    const resolved = await allImageData;
    console.log(resolved);
    return {
        props: {
            allImageData: resolved,
        },
    }
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

export default function Gallery({ allImageData }: { allImageData: FileObject[] }) {
    console.log(allImageData);
    return (
       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24
        sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2
            gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            </div>
        </div> 
    );
}
