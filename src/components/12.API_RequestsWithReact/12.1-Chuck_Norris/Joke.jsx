import React from 'react'
import FetchData from './FetchData';

class Joke extends React.Component {

    state = {
        theJoke: '',
    }

    anotherJokeButton() {
        console.log('clicked');
        this.setState({theJoke:'hoho'});
    }

    render() {
        return (
            <div>
                <input onClick={this.anotherJokeButton} type="button" name="" id="" />
                <FetchData/>
            </div>
        );
    }
}

export default Joke