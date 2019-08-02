import React from 'react'
import Types from './Types/Types'

class TypesDirty extends React.Component {
    constructor(props){
        super(props)
    }


    

    render(){
        return(
            <div> <Types
                    stateFunc={this.props.stateFunc}
                    profession={this.props.profession} 
                    classes={this.props.classes} 
                    state={this.props.state}
                    type={this.props.type}
                    />
            </div>
        )
    }
}

export default TypesDirty