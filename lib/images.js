import { createClient } from '@supabase/supabase-js';


export async function getAllImageData() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data } = await supabaseAdmin.storage.from("image-bucket").list();

    return data;
}

export async function getImageData(id) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const image_path = supabaseAdmin.storage.from("image-bucket").getPublicUrl(id);

    return image_path;
}