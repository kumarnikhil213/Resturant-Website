
import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, Button, Modal } from '@mui/material';
import { MenuList } from '../Data/Data';
import Layout from '../Components/Layout/Layout';
import Payment from '../Payment/Payment'; // Modal component

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOrder = (menu) => {
    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const itemIndex = existingOrders.findIndex(item => item.name === menu.name);

    if (itemIndex !== -1) {
      existingOrders[itemIndex].quantity += 1;
    } else {
      existingOrders.push({ ...menu, quantity: 1 });
    }

    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Open Modal
    setSelectedMenu(menu);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 5 }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ width: 300, borderRadius: 3, boxShadow: 3 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                src={menu.image}
                alt={menu.name}
                sx={{ minHeight: '300px' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{menu.name}</Typography>
                <Typography variant="body2" color="text.secondary">{menu.description}</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>₹{menu.price}</Typography>
                <Button
                  sx={{ mt: 1, bgcolor: 'black', color: 'white' }}
                  onClick={() => handleOrder(menu)}
                >
                  Order Now
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Payment Modal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="payment-modal"
        aria-describedby="payment-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 400,
          }}
        >
          <Payment selectedMenu={selectedMenu} onClose={handleClose} />
        </Box>
      </Modal>
    </Layout>
  );
};

export default Menu;

