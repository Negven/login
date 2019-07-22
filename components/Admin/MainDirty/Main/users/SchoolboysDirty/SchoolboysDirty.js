import React from 'react'
import Schoolboys from './Schoolboys/Schoolboys'

class SchoolboysDirty extends React.Component {
    constructor(props){
        super(props)
    }

    stateAdd = null

    openAddSchoolboy = () => {
        this.stateAdd=1
        this.forceUpdate()
    }

    closeAddSchoolboy = () => {
        this.stateAdd=0
        this.forceUpdate()
    }
    

    render(){
        return(
            <div> <Schoolboys
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    stateAdd={this.stateAdd}
                    closeDelete={this.props.closeDelete}
                    openDelete={this.props.openDelete}
                    openAddSchoolboy={this.openAddSchoolboy}
                    state={this.props.state}
                    stateDelete={this.props.stateDelete}
                    openAdd={this.props.openAdd}
                    closeAddSchoolboy={this.closeAddSchoolboy}/>
            </div>
        )
    }
}

export default SchoolboysDirty