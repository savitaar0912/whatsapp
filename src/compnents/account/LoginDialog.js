import '../../CSS/LoginDialogCSS.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Dialog, List, ListItem } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Update with the correct path
import { qrCodeImage } from '../../constants/data';
import { addUser } from '../../store/userSlice';
import { addUSER } from '../../services/api';

function LoginDialog() {

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
        flexWrap: 'wrap'
    };

    const container = {
        padding: '50px',
    };

    const LoginSuccess = async (res) => {
        const decodedToken = jwtDecode(res.credential);
        console.log(decodedToken);
        // console.log(decodedToken.email);

        // Dispatch the 'add' action to add the user to the Redux store and API
        dispatch(addUser(decodedToken));
        await addUSER(decodedToken)
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
                            <ListItem>1. Open WhatsApp on your phone.</ListItem>
                            <ListItem>
                                2. Tap Menu on Android, or Settings on iPhone.
                            </ListItem>
                            <ListItem>
                                3. Tap Linked devices and then Link a device.
                            </ListItem>
                            <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>
                        </List>
                    </Box>
                    <Box className='qr'>
                        <img className='qr' src={qrCodeImage} alt='QR Code' />
                        <Box className='googlelogin'>
                            <GoogleLogin onSuccess={LoginSuccess} onError={LoginError} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    );
}

export default LoginDialog;
