import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'

import resume from '../Assets/image/resume.jpg';
import classes from './Resume.css'

class Resume extends Component{ 

    render(){
        return(
            <div className={classes.resume}>
                <img src={resume} alt='resume' width='300' height='400'/>
                <h1>Resume</h1> 
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}
export default Resume;