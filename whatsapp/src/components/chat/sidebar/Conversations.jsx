import { Box, Typography,styled } from '@mui/material'
import React from 'react'


const Component = styled(Box)`
    display:flex;
    height : 45px;
    padding: 13px;
    cursor : pointer;
`
const Image = styled("img")({
    width: 50,
    height : 50,
    borderRadius:"50%",
    padding : "0 14px",

})
export const Conversations = ({user}) => {
    console.log("USER",user)
  return (
    <Component>
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
