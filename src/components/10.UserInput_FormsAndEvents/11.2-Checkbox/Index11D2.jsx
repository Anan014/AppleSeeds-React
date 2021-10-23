import React from 'react'
import Checkbox from './Checkbox';

class Index11D2 extends React.Component {
    render() {
        return (
            <div>
                <Checkbox isChecked={false} label="I read the term of the app"/>
                <Checkbox isChecked={false} label="I accept the term of the app"/>
                <Checkbox isChecked={true} label="I want to get the weekly news letter"/>
                <Checkbox isChecked={true} label="I want to get sales and offers"/>
            </div>
        );
    }
}


export default Index11D2