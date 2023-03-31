import { getImageInfo } from '../lib/images';
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useState } from 'react';
import Image from 'next/image';

export async function getStaticProps() {
    const imageInfo = getImageInfo();
    const resolved = await imageInfo;
    return {
        props: {
            allImageData: resolved.data
        },
    }
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Gallery({ allImageData }: Array<string>) {
    const [isLoading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (

       <div id="container">
            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2
            gap-x-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
                {allImageData.map(({ name, imageSrc, comments }) => (
                    <div key={name}>
                        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-5 xl:aspect-h-5 w-full
                        overflow-hidden rounded-lg bg-gray-200">
                            <Image
                                alt=""
                                src={imageSrc}
                                width="500"
                                height="500"
                                onClick={()=>handler() }
                                className={cn(
                                    "hover:opacity-70 group-hover:opacity-75 duration-700 ease-in-out",
                                    isLoading
                                        ? 'grayscale blur-2xl scale-110'
                                        : 'grayscale-0 blur-0 scale-100'
                                )}
                                onLoadingComplete={() => setLoading(false)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            NextUI
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Row justify="space-between">
                        Image
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div> 
    );
}
