import { Navbar, Text} from "@nextui-org/react";
import React from "react";

export function Nav() {

    return (
        <Navbar id="myNav" variant="sticky">
            <Navbar.Brand>
                <Text b color="inherit">
                    Lucas Harlor - Photography
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="lg">
                <Navbar.Link isActive href="/">Images</Navbar.Link>
                <Navbar.Link href="/about_me">About Me</Navbar.Link>
                <Navbar.Link href="/upload">Upload</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}