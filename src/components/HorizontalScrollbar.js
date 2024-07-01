import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, visibilityContext} from 'react-horizontal-scrolling-menu'

const HorizontalScrollbar = ({bodyParts, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu>
     

      {bodyParts.map((item) => (
        <Box
          key = {item.id || item} 
          itemID = {item.id || item}
          title = {item.id || item}
          m = "0 40px"
        >
          <BodyPart item = {item} bodyPart = {bodyPart} setBodyPart = {setBodyPart}></BodyPart>
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar