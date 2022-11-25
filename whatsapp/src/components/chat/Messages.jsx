import { Box, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Footer } from './Footer'
import { AccContext } from "../../context/Provider"
import { newMessage } from '../../services/api'

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;


`
const Component = styled(Box)`
    height : 80vh;
    overflow-y: schroll;
`

export const Messages = ({ person,conversation }) => {
  const [value, setValue] = useState("")

    const { acc } = useContext(AccContext)
    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if (code == 13) {
            let msg = {
                senderId: acc.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text:  value,  

            }
            await newMessage(msg)
            setValue("");
        }
    }
    return (
        <Wrapper>
            <Component>

            </Component>
            <Footer sendText={sendText} 
            setValue={setValue}
            value={value}
            />
        </Wrapper>
    )
}
