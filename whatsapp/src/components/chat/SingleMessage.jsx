import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccContext } from '../../context/Provider'
import { formateDate } from '../../Utils/common-utils'

const Own = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;

`
const Received = styled(Box)`
  background: #FFFFFF;
  max-width: 60%;
  
  padding: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
  
`
const Time = styled(Typography)`
    font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
  `
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px
`
export const SingleMessage = ({ message }) => {
  const { acc } = useContext(AccContext)
  return (
    <>
      {acc.sub == message.senderId ?
        <Own>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </Own> :
        <Received>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </Received>

      }
    </>
  )
}
