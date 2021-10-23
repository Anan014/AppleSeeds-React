import React from 'react'
import CustomButton from './CustomButton'

const colors = ['blue', 'red', 'yellow'];


class Index11D1 extends React.Component {
    state = {
        color: 'fuck',
    }

    onColorClick = (color) => {
        this.setState({color:color});
    };

    render() {
        return (
            <div>
                <div>
                    <p>The color seleted is: <span style={{ color: this.state.color }}>
                        {this.state.color}
                    </span>
                    </p>
                </div>
                {colors.map((color,index) => {
                        return (
                            <CustomButton method={this.onColorClick} color={color} key={index}/>
                            );
                    })}
            </div>
        );
    }
}

export default Index11D1