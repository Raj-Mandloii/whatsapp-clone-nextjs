import { Box ,styled} from '@mui/material'
import React from 'react'
import { Header } from './Header';
import { Search } from './Search';


export const Sidebar = () => {
  return (
    <Box>
        <Header/>
        <Search/>
    </Box>
  )
}
