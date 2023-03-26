import { createClient } from '@supabase/supabase-js';


export async function getAllImageData() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data } = await supabaseAdmin.storage.from("image-bucket").list();

    return data;
}

export async function getAllImageNames() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data } = await supabaseAdmin.storage.from("image-bucket").list();

    return data.map((image) => {
        return {
            params: {
                name: image.name,
            },
        };
    });
}

export async function getImageData(name) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const image_path = supabaseAdmin.storage.from("image-bucket").list('', {
        search: name
    });

    return `https://mphoimujumzasrbtyzhr.supabase.co/storage/v1/object/public/image-bucket/` +name;
}

export async function getImageInfo(name) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const image_info = supabaseAdmin.from("images").select('name,username,imageSrc,comments');

    return image_info;
}