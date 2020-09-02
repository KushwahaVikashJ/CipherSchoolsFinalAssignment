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
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>ES6</li>
                        <li>React</li>
                    </ul>
                </div>

                <hr></hr>
                <div>
                    <h3>Backend</h3>
                    <ul className={classes.skill}>
                        <li>Node</li>
                        <li>Expres</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Rest API</li>
                    </ul>
                </div>
                <hr></hr>
                <div>
                    <h3>More</h3>
                    <ul className={classes.skill}>
                        <li><a href='https://drive.google.com/file/d/1if93SRfzPicWFiK-EbSnPqiv9e8t8dgG/view'>Resume</a></li>                        
                    </ul>
                </div>
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}
export default Skills;