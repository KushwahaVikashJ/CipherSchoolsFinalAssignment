import React, {Component} from 'react';
import axios from '../axios';

class Dashboard extends Component{

    state={
        timeTable:[],
        spinner:false
    }

    componentDidMount(){
        this.setState({
            spinner:true
        })
        axios.get('/todaysTimetable.json')
        .then(res=>{

            this.setState({
                spinner:false,
                timeTable:res.data
            })
        })
        .catch(err=>{
            this.setState({
                spinner:false
            })
        })
    }

    render(){
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Dashboard;