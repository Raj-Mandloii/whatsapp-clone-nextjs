import { Box, styled } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import { Footer } from './Footer'
import { AccContext } from "../../context/Provider"
import { getMessage, newMessage } from '../../services/api'
import { SingleMessage } from './SingleMessage'


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;


`
const Component = styled(Box)`
    height : 80vh;
    overflow-y: schroll;
`
const Container = styled(Box)`
padding: 1px 80px;
`
export const Messages = ({ person, conversation }) => {
    const [value, setValue] = useState("")
    const [message,setMessages] = useState([]);
    const [messageFlag,setMessageFlag] = useState(false)

    const { acc } = useContext(AccContext)
    const sendText = async (e) => {
        const code = e.keycode || e.which;
        if (code == 13) {
            let msg = {
                senderId: acc.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: value,

            }
            await newMessage(msg)
            setValue("");
            setMessageFlag(p => !p)
        }
    }
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data)
        }
        // because calling one undefined call or dont have any messages. 
        conversation._id && getMessageDetails();
    },[person._id,conversation._id,messageFlag])
    return (
        <Wrapper>
            <Component>
                {message && message.map(el =>(
                    <Container>
                   <SingleMessage message={el} key={el._id}/> 
                    </Container>
                ))}
            </Component>
            <Footer sendText={sendText}
                setValue={setValue}
                value={value}
            />
        </Wrapper>
    )
}