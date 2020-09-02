import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props)=>{

    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link={'/'}>Home</NavigationItem>
            <NavigationItem link={'/skills'}>Skills</NavigationItem>
            <NavigationItem link={'/contact'}>Contact</NavigationItem>
        </ul>
    )
}

export default NavigationItems