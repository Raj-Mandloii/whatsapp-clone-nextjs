import { Box } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccContext } from '../../context/Provider'
import { ChatHeader } from './ChatHeader'
import { Messages } from './Messages'


export const ChatBox = () => {
    const {person} = useContext(AccContext)
    return (
        <Box>
            <ChatHeader person={person}/>
            <Messages person={person}/>
        </Box>
    )
}
