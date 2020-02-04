import React, {Fragment} from 'react';

import NavbarP from './NavbarP';

const Layout = ({children}) => {
    return (
        <Fragment>
            <NavbarP />
            {children}
        </Fragment>
    );
};

export default Layout;