import Image from 'next/image';
import profilePic from '../assets/me.jpg';

export default function About() {

    return (
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12
        sm:px-6 lg:max-w-7xl lg:px-8">
            <h1>About Me-</h1>
            <div className="max-w-2xl mx-auto py-8 px-2 sm:py-2">
                <Image
                    id="profileImage"
                    alt=""
                    src={profilePic }
                    width="200"
                    height="200"
                />
            </div>
            <div>
                <p>I am Lucas Harlor, a Software Developer with a passion for astrophotography. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}