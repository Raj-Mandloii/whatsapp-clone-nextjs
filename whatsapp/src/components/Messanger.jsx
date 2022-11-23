import React from 'react'
import { LoginDialogue } from './LoginDialogue'
import { AppBar, Toolbar, styled, Box } from "@mui/material"

const Header = styled(AppBar)`
height:220px;
background-color:#00a884;
box-shodow: none;`

const Component = styled(Box)`
height: 100vh;
background-color:#111b21;
`
export const Messanger = () => {
    return (
        <Component>

            <Header>
                <Toolbar>

                    <LoginDialogue />
                </Toolbar>
            </Header>
        </Component>
    )
}
