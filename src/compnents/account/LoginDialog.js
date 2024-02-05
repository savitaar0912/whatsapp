// Import necessary dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Dialog, List, ListItem } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Update with the correct path
import '../../CSS/LoginDialogCSS.css';
import { qrCodeImage } from '../../constants/data';
import { add } from '../../store/userSlice';

function LoginDialog() {

    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const dialog = {
        height: '95%',
        width: '70%',
        marginTop: '10%',
        maxHeight: '100%',
        maxWidth: '100%',
        boxShadow: 'none',
        overFlow: 'hidden',
    };

    const component = {
        display: 'flex',
    };

    const container = {
        padding: '56px',
    };

    const LoginSuccess = (res) => {
        const decodedToken = jwtDecode(res.credential);
        console.log(decodedToken);

        // Dispatch the 'add' action to add the user to the Redux store
        dispatch(add(decodedToken));

        navigate('/chat');
    };

    const LoginError = (res) => {
        console.log('Login Failed', res);
    };

    return (
        <>
            <Dialog open={true} PaperProps={{ sx: dialog }} hideBackdrop={true}>
                <Box sx={component}>
                    <Box sx={container}>
                        <p className='title'>Use Whatsapp on your Computer</p>
                        <List>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>
                                2. Tap&nbsp;<strong>Menu </strong>&nbsp;on Android, or&nbsp;
                                <strong>Settings </strong>&nbsp; on iPhone
                            </ListItem>
                            <ListItem>
                                3. Tap&nbsp;<strong>Linked devices</strong>&nbsp;and then&nbsp;
                                <strong>Link a device</strong>
                            </ListItem>
                            <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>
                        </List>
                    </Box>
                    <Box className='qr'>
                        <img className='qr' src={qrCodeImage} alt='QR Code' />
                        <Box style={{ position: 'absolute', top: '165px', left: '80px' }}>
                            <GoogleLogin onSuccess={LoginSuccess} onError={LoginError} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}

export default LoginDialog;
