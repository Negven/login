import React from 'react'
import Schoolboys from './Schoolboys/Schoolboys'

class SchoolboysDirty extends React.Component {
    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div> <Schoolboys
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    state={this.props.state}
                    />
            </div>
        )
    }
}

export default SchoolboysDirty