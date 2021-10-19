import React from 'react'
import Spinner from './Spinner';
import './style.css'

class Index9D1 extends React.Component {
    state = {
        seconds:5,
        randNum:Math.floor(Math.random()*3 +1),
    }

componentDidMount(){
    this.interval = setInterval(() => {
        if(this.state.seconds <= 1){
            clearInterval(this.interval)
        }
        this.setState({seconds:this.state.seconds-1})
    }, 1000);
}


    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>{this.state.seconds}</h1>
                <Spinner
                random={this.state.randNum}
                dispaly={this.state.seconds===0? 'none':'block'}/>
            </div>
        );
    }
}

export default Index9D1