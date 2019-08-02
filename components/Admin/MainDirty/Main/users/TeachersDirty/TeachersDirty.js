import React from 'react'
import Teachers from './Teachers/Teachers'

class TeachersDirty extends React.Component {
    constructor(props){
        super(props)
    }


    

    render(){
        return(
            <div> <Teachers
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    lessons={this.props.lessons} 
                    state={this.props.state}
                    />
            </div>
        )
    }
}

export default TeachersDirty