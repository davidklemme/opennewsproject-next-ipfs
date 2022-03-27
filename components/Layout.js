import React from 'react';
import Meta from './Meta';
import Footer from './Footer';
import HeaderWithSearch from './Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Meta />
            <HeaderWithSearch />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
