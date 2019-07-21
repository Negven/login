import React from 'react'
import Teachers from './Teachers/Teachers'

class TeachersDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAdd = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAdd = () => {
        this.stateAdd=0
        this.forceUpdate()
    }
    

    render(){
        return(
            <div> <Teachers
                    openAddTeach={this.openAdd}
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    lessons={this.props.lessons} 
                    stateAdd={this.stateAdd}
                    openDelete={this.props.openDelete}
                    openAdd={this.props.openAdd}
                    state={this.props.state}
                    closeAdd={this.closeAdd}/>
            </div>
        )
    }
}

export default TeachersDirty