import React from 'react'
import Day from './Day/Day';
import Classes from './Schedule.module.css'

class Schedule extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className={Classes.title}>Розклад уроків</div>
                {this.props.schedule.map((e, i)=>{
                    return (
                        <Day 
                            key={"day" + i} 
                            idDay={i} 
                            state={e}
                            teachers={this.props.teachers}
                            stateFunc={this.props.stateFunc}
                            days={this.props.days}
                            lessons={this.props.lessons}
                            durations={this.props.durations}
                            groups={this.props.groups}
                        />
                    )
                })}
            </>
        )
    }
}

export default Schedule