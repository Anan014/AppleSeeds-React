import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.isChecked,
        };

        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    checkboxHandler(e) {
        this.setState({
            checked: e.target.checked
        });
    }

    render() {
        return (
            <div>
            <input type="checkbox"
                checked={this.state.checked}
                onChange={this.checkboxHandler}
            />
            <label>{this.props.label}</label>
            </div>
        );
    }
}


export default Checkbox