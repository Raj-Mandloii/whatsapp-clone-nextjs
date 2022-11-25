import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material"
import { useState } from 'react';


const Component = styled(Box)`
  display: flex;
  height: 55px;
  backgroud: #ededed;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }

`;
const Search = styled(Box)`
    background-color: #fff;
    border-radius: 18px;
    width: calc( 94% - 100px);
`
const Clip = styled(AttachFile)`
    transform: rotate(40deg)
`
const InputField = styled(InputBase)`
  width : 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;

`
export const Footer = ({ sendText ,setValue, value}) => {

  return (
    <Component>
      <EmojiEmotionsOutlined />
      <Clip />
      <Search>
        <InputField 
        value={value}
        placeholder='Type a message'
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
        />
      </Search>
      <Mic />
    </Component>
  )
}