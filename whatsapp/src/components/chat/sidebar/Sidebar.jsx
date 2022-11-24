import { Box ,styled} from '@mui/material'
import React from 'react'
import { Conversation } from './Conversation';
import { Header } from './Header';
import { Search } from './Search';


export const Sidebar = () => {
  return (
    <Box>
        <Header/>
        <Search/>
        <Conversation/>
    </Box>
  )
}
