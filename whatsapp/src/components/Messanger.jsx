import React from 'react'
import { LoginDialogue } from './LoginDialogue'
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import { useContext } from 'react'
import { AccContext } from '../context/Provider'
import { ChatDialog } from './chat/ChatDialog'

const Header = styled(AppBar)`
height:220px;
background-color:#00a884;
box-shodow: none;`

const Component = styled(Box)`
height: 100vh;
background-color:#111b21;
`
export const Messanger = () => {
    const { acc } = useContext(AccContext)
    return (
        <Component>
            {acc ? <ChatDialog /> : <>

                <Header>
                    <Toolbar>
                        <LoginDialogue />
                    </Toolbar>
                </Header>

            </>}
        </Component>
    )
}
