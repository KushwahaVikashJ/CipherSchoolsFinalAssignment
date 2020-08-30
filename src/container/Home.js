import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'

import mySelf from '../Assets/image/mySelf.jpg';
import classes from './Home.css'

class Home extends Component{
    render(){
        return(
            <div>
                <div className={classes.homeItem}>
                    <img className={classes.mySelfImage} src={mySelf} alt="student"/>
                    <h1>Hello,</h1>
                    <h1>I am a Full-stack Developer</h1>                      
                </div>
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}

export default Home;