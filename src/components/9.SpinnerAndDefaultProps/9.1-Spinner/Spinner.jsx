import React from 'react'

class Spinner extends React.Component {

    render() {
    console.log(this.props.random);

        return (
            <div>
                
                <div className={`loading${this.props.random}`} style={{display:this.props.dispaly}}>
                </div>
            </div>
        );
    }
}

export default Spinner