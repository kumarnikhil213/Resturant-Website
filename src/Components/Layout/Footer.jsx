import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
   <Box sx={{textAlign:'center', bgcolor: 'black', color: 'white', p:3}} 
     
   >
    <Box sx={{
        my:3,
        "& svg":{
            fontSize: '60px',
            cursor: 'pointer',
            mr: 2,


        },
      "& svg:hover":{
        color: "goldenrod",
        transform:"translatex(5px)",
        transition: "all 400ms"
      }
    }} >
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <GitHubIcon />
        <YouTubeIcon />
    </Box>

       <Typography variant='h5' sx={{
        "@medial (max-width: 600px)": {
            fontSize: "1rem"
        }
       }}>
        All right reserved &copy; Nikhil Ekghara
       </Typography>
   </Box>
  )
}

export default Footer;