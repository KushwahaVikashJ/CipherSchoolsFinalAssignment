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
                    <a href='https://www.linkedin.com/in/kushwaha-vikash-323144170/'><LinkedInIcon className={classes.icon}/></a>
                    <a href='https://github.com/KushwahaVikashJ'><GitHubIcon className={classes.icon}/></a>
                    <a href='https://twitter.com/KushwahaVikash_'><TwitterIcon className={classes.icon}/></a> 
                </div>                   
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}
export default Contact;