import { useState } from "react";
import { Input, Button, Textarea, Grid } from '@nextui-org/react';

export default function Upload() {

    return (
        <div className="max-w-2xl mx-auto py-10 px-8 sm:py-12
        sm:px-12 lg:max-w-2xl lg:px-4">
            <Grid.Container gap={2} justify="center">
                <Grid md={12} justify="center">
                    <Grid md={4} justify="center">
                        <Input bordered placeholder="Image Name" />
                    </Grid>
                    <Grid md={4} justify="center">
                        <Input bordered type="url" />
                    </Grid>  
                </Grid>
                <Grid md={12} justify="center">
                    <Textarea bordered
                        minRows={2}
                        maxRows={10}
                        size="xl"
                        placeholder="Comments..." />
                </Grid>
                <Grid md={12} justify="center">
                    <Button type="submit">Submit</Button>
                </Grid>
            </Grid.Container>
        </div>
    )
}