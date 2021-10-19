import React from 'react'
import Box from './Box'
import './style.css'

class Index8D2 extends React.Component {

    state = {
        show: '',
    }

    static enderAfter1Sec() {
        setTimeout(() => {
            <p>help</p>
        }, 1000)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: 'hide' })
        }, 6000)
    }

    render() {
        return (
            <div>
                <Box show={this.state.show} axis="100px" />
                <Box show={this.state.show} axis="200px" />
                <Box show={this.state.show} axis="50px" />
            </div>
        );
    }
}

export default Index8D2