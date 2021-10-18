import React from 'react'

class Index7D2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        //change state
        this.setState(state => ({
            isToggleOn: !state.isToggleOn}));
    }

    render() {
        return (
            <div>
                <input onClick={this.handleClick}
                    type="button"
                    value={this.state.isToggleOn ? "Show" : "Hide"}
                    style={{ width: "100px" }}
                />

                <div style={{
                    backgroundColor: "red",
                    height: "100px",
                    width: "100px",
                    display: this.state.isToggleOn ? "none" : "block"
                }}>
                </div>
            </div>
        );
    }
}

export default Index7D2