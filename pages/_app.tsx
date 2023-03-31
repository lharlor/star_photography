import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, Container } from '@nextui-org/react';
import { Nav } from '../lib/nav_toolbar';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <Container>
                <Nav />
                <Component {...pageProps} />
            </Container>
        </NextUIProvider>
    )
}

export default MyApp
