import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';


import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import contactImage from '../Assets/image/contact.jpg';
import classes from './Contact.css'

class Contact extends Component{
    render(){
        return(
            <div className={classes.contact}>   
                <img className={classes.contactImage} src={contactImage} alt="student"/>  
                <h1>Let's connect</h1>
                <div className={classes.icons}>
                    <LinkedInIcon className={classes.icon}/>
                    <GitHubIcon className={classes.icon}/>
                    <TwitterIcon className={classes.icon}/> 
                </div>                   
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}
export default Contact;