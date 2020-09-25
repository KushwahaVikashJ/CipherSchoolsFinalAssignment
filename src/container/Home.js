import React, {Component} from 'react';
import ParticlesBg from 'particles-bg'
import { init } from "ityped";

import mySelf from '../Assets/image/mySelf.jpg';
import classes from './Home.css'

class Home extends Component{
    componentDidMount() {
        const myElement = document.querySelector("#myElement");
        init(myElement, {
          showCursor: false,
          strings: ["Full-stack Developer","Blogger","Student"]
        });
      }
    render(){
        return(
            <div>
                <div className={classes.homeItem}>
                    <img className={classes.mySelfImage} src={mySelf} alt="student"/>
                    <h1>Hello, I'm a</h1>
                    <h1><div id="myElement"></div></h1>                      
                </div>
                <ParticlesBg color="#66d9eb" num={30} type="cobweb" bg={true} />
            </div>
        )
    }
}

export default Home;