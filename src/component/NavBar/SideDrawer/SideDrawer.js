import React from 'react';

import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Spinner from '../../UI/Spinner/Spinner';
import image from '../../../Assets/image/image.png';
import NavigationItems from '../Navigation/NavigationItems';

const SideDrawer = (props)=>{

    let move = [classes.SideDrawer,classes.close];
    if(props.open){
        move = [classes.SideDrawer,classes.open];
    }

    let data = (
            <div className={classes.profileData}>
                <img src={image} alt="student" width="100" height="100"/>
                <p>{props.profile.name}</p>
                <p>{props.profile.roll}</p>
                <p>{props.profile.branch}</p>
                <p>{props.profile.year}</p>
            </div>
    )

    if(props.spinner){
        data = <Spinner/>
    }

    return(
        <div>
            <Backdrop open={props.open} BackdropClicked={props.BackdropClicked}/>
            <div className={move.join(' ')} onClick={props.BackdropClicked}>
                <div className={classes.profile}>
                    {data}
                </div>
                <nav > 
                    <NavigationItems/>                                                 
                </nav>
            </div>            
        </div>
    )
}

export default SideDrawer