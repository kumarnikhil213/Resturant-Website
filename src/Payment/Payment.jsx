
import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Button, Typography, RadioGroup, FormControlLabel, Radio, Alert
} from '@mui/material';
import GPayQR from '../assets/GPay.jpg';
import PhonePeQR from '../assets/PhonePay.jpg';
import PaytmQR from '../assets/Paytm.jpg';

const Payment = ({ selectedMenu, onClose }) => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [method, setMethod] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
    const totalAmount = storedOrders.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, []);

  const handleConfirm = () => {
    if (!name.trim() || !address.trim()) {
      setError('⚠️ Please enter your name and address before proceeding.');
      return;
    }
    if (!method) {
      setError('⚠️ Please select a payment method.');
      return;
    }

    setError('');
    if (method === 'Cash on Delivery') {
      alert(`✅ Order placed successfully with Cash on Delivery! Total ₹${total}`);
      localStorage.removeItem('orders'); // clear after order
      onClose();
    } else {
      setShowQR(true);
    }
  };

  const getQRImage = () => {
    switch (method) {
      case 'GPay': return GPayQR;
      case 'PhonePe': return PhonePeQR;
      case 'Paytm': return PaytmQR;
      default: return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {!showQR ? (
        <>
          <Typography variant="h6" fontWeight="bold" align="center">Payment for your order</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField label="Your Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Address" fullWidth multiline minRows={2} value={address} onChange={(e) => setAddress(e.target.value)} />
          <Typography variant="subtitle2">Select Payment Method:</Typography>
          <RadioGroup row value={method} onChange={(e) => setMethod(e.target.value)}>
            <FormControlLabel value="GPay" control={<Radio />} label="GPay" />
            <FormControlLabel value="PhonePe" control={<Radio />} label="PhonePe" />
            <FormControlLabel value="Paytm" control={<Radio />} label="Paytm" />
            <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
          </RadioGroup>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="outlined" color="error" onClick={onClose}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleConfirm}>Confirm Payment</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h6" fontWeight="bold" align="center">Scan & Pay via {method}</Typography>
          <Typography align="center">Total Amount: ₹{total}</Typography>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <img src={getQRImage()} alt={`${method} QR`} style={{ width: 250, height: 250 }} />
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            fullWidth
            onClick={() => {
              alert(`✅ Payment of ₹${total} confirmed! Your order has been placed.`);
              localStorage.removeItem('orders');
              onClose();
            }}
          >
            I Have Paid
          </Button>
        </>
      )}
    </Box>
  );
};

export default Payment;

