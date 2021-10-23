import React from 'react'
import Joke from './Joke'

class Index12D1 extends React.Component {

    constructor() {
        super()

        this.state = {
            loading: true,
            joke: '',
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount(e) {
        console.log(e);
        this.setState({ loading: true });
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ joke: data.value, loading: false })
        console.log('click');
    }

    render() {
        return (
            <div>
                <input onClick={this.componentDidMount} type="button" value="Another Joke" />
                {this.state.loading || !this.state.joke ? (
                    <div>Loading...</div>) : (<div>{this.state.joke}</div>)}
            </div>
        );
    }
}

export default Index12D1