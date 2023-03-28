import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import React from "react";

export function Nav() {

    return (
        <Navbar isBordered id="myNav">
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    Lucas Harlor - Photography
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                <Navbar.Link isActive href="#">Images</Navbar.Link>
                <Navbar.Link href="#">About Me</Navbar.Link>
                <Navbar.Link href="#">Upload</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}