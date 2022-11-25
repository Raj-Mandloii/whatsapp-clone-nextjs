import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccContext } from '../../../context/Provider'
import { setConversation } from '../../../services/api'


const Component = styled(Box)`
    display:flex;
    height : 45px;
    padding: 13px;
    cursor : pointer;
`
const Image = styled("img")({
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",

})
export const Conversations = ({ user }) => {
    const {setPerson, acc} = useContext(AccContext);
    
     const getUser = async () =>{
       
        await setPerson(user);
        await setConversation({senderId: acc.sub,receiverId: user.sub})
    }

    return (
        <Component onClick={()=> getUser()}>
            <Box>
                <Image src={user.picture} alt="Pic" />
            </Box>
            <Box>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Component>
    )
}
