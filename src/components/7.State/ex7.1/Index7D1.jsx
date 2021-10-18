import React from 'react'
import Button from './Buttons'

class Index7D1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <Button onClick={this.increment} value="+"/>
                <Button onClick={this.decrement} value="-"/>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default Index7D1

