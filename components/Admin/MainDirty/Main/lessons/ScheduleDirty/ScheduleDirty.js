import React from 'react'
import Schedule from './Schedule/Schedule';

class ScheduleDirty extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Schedule 
                schedule={this.props.schedule}
                stateFunc={this.props.stateFunc}
                days={this.props.days}
                lessons={this.props.lessons}
                durations={this.props.durations}
                teachers={this.props.teachers}
                groups={this.props.groups}
            />
        )
    }
}

export default ScheduleDirty