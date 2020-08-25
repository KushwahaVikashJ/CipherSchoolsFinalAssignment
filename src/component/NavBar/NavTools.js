import React from 'react';

import DrawerToggle from './DrawerToggle/DrawerToggle';


import classes from './NavTools.css';

const NavTools = (props)=>{
    return(
        <header className={classes.NavTools}>         
            <DrawerToggle toggleClicked={props.toggleClicked}/>
            
        </header>
    )
}

export default NavTools