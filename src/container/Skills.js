import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'

import classes from './Skills.css'

class Skills extends Component{ 

    render(){
        return(
            <div className={classes.skills}>
                <h1>Professional Skills</h1>
                <hr></hr>
                <div>
                    <h3>Frontend</h3>
                    <ul className={classes.skill}>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JS</li>
                        <li>ES6</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </div>

                <hr></hr>
                <div>
                    <h3>Backend</h3>
                    <ul className={classes.skill}>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Rest API</li>
                        <li>MySql</li>
                    </ul>
                </div>
                <hr></hr>
                <div>
                    <h3>More</h3>
                    <ul className={classes.skill}>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Firebase</li>
                        <li className={classes.resume}><a href='https://drive.google.com/file/d/1if93SRfzPicWFiK-EbSnPqiv9e8t8dgG/view'>Resume</a></li>                        
                    </ul>
                </div>
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}
export default Skills;