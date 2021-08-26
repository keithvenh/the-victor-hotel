import React from 'react';

class School extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date()
        }
    }

    render() {
        console.log("IN SCHOOL CLASS");
        console.log(new Date())
        return (
            <h3 className='date'>{this.state.today.toLocaleDateString()}</h3>
        )
    }
}

export default School;