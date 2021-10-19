import React from 'react'

class Shape extends React.Component {

state = {
    shape:'box',
    color: 'blue',
    value:0,
}

colors = ['grey','red','yellow','green'];

componentDidMount(){
    this.interval = setInterval(() => {
        this.setState({color:this.colors[this.state.value],
        value:this.state.value + 1,});
        if (this.state.value === 4) {
            this.setState({shape:'circle'})
            clearInterval(this.interval);
        }
    }, 500);
}

    render(){
        return(
            <div className={this.state.shape} style={{backgroundColor:this.state.color}}>

            </div>
        );
    }
}

export default Shape