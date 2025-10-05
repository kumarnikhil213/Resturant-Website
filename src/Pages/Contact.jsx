import React from 'react'
import Layout from '../Components/Layout/Layout';
import { Box, Table, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    
        <Layout>
          <Box sx={{my:10, ml: 5,"& h4":{
            fontWeight:'bold', mb:2
          }} }>
            <Typography variant='h4' textAlign={'center'} fontWeight={'bold'}>
              Contact my resturant
            </Typography>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique numquam aliquid, fugit harum ratione quos. Quisquam, inventore laboriosam saepe optio cupiditate corrupti porro? Unde ex culpa blanditiis iste repellendus sint.
            </p>
          </Box>
          <Box sx={{margin:3, width:'600px', ml:10, "@media (max-width:600px)":{
            width:'300px'
          }}}>
            <TableContainer component={Paper}>
              <Table aria-label = "contact table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{bgcolor:'black', color:"whitesmoke", textAlign:'center'}}>
                      Contact Detail
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                       <SupportAgentIcon sx={{color:'goldenrod', }} /> +91 9334172125 (Tollfree)
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell>
                       <EmailIcon sx={{color:'black'}} /> nikhilekghara9334@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                       <WhatsAppIcon sx={{color:'green'}} /> +91 9266306125
                    </TableCell>
                  </TableRow>
                </TableBody>

              </Table>
            </TableContainer>
          </Box>
        </Layout>
    
  )
}

export default Contact;