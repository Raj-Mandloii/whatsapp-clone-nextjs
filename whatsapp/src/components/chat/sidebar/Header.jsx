import { Box ,styled} from '@mui/material'
import React, { useContext } from 'react'
import { AccContext } from '../../../context/Provider'
import {Chat as MessageIcon,MoreVert} from "@mui/icons-material"


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;


`

const Wrapper = styled(Box)`
      margin-left:auto;
      & > * {
        margin-left:2px;
        padding: 8x;
        color: #000
      };
      & : first-of-type {
        font-size : 22px;
        margin-right: 8px;
        margin-top: 3px;
      }
`
const Image = styled("img")({
  height: 40,
  width:40,
  borderRadius: 50
})
export const Header = () => {

  const { acc } = useContext(AccContext);
  return (
    <>
      <Component>
        
        <Image src={acc.picture} alt="Pic" />
        <Wrapper>
        <MessageIcon/>
        <MoreVert/>
        </Wrapper>
        
      
      </Component>
    </>
  )
}
