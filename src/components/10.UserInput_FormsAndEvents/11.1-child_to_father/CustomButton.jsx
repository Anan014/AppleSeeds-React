import React from "react";

class CustomButton extends React.Component {
    render() {
        return (
            <div>
                <input onClick={()=>this.props.method(this.props.color)} type="button" value={this.props.color}/>
            </div>
        );
    }
}

export default CustomButton