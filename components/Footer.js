import React from 'react';
import { Divider } from '@mui/material';
import Emoji from './Emoji';

const Footer = () => {
    return (
        <div style={{ paddingTop: '10px' }}>
            <Divider />
            <footer style={{ padding: '20px', display: 'flex', justifyContent: 'center', maxHeight: '100px' }}>
                Made with <Emoji symbol={'🧡'} /> all over the world.
            </footer>
        </div>
    );
};
export default Footer;
