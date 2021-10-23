import React from 'react'

class FetchData extends React.Component {

    state = {
        loading: true,
        joke:'',
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.joke ? (
                <div>Loading...</div>) : (<div>{this.state.joke}</div>)}
            </div>
        );
    }
}

export default FetchData