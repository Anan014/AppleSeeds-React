import React from 'react'

class Index8D1 extends React.Component {
    state = {
        favoriteColor: 'blue',
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'red' });
            document.querySelector('#color').innerHTML =
            `The updated favorite color is ${this.state.favoriteColor}`
        }, 3000)
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id="color"></div>
            </div>
        );
    }
}

export default Index8D1