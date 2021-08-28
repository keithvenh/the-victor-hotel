import React from 'react';
import displayDate from '../../helpers/displayDate';

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
            <div className='todays-date'>
                <p className='date-label'>Today is:</p>
                <h3 className='date'>{displayDate(this.state.today)}</h3>
            </div>
        )
    }
}

export default School;