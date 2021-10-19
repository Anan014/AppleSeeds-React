import React from 'react'

class Box extends React.Component {
    render() {
        return (
            <div>
                <div className={"box slide "  + this.props.show}
                style={{ width: this.props.axis, height: this.props.axis }}>
                </div>
            </div>
        );
    }
}

export default Box