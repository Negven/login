import React from 'react'
import Edit from './Edit/Edit';

class EditDirty extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div><Edit 
                    stateFunc={this.props.stateFunc}
                    parent={this.props.parent} 
                    profession={this.props.profession} 
                    id={this.props.id}
                    closeEditState={this.props.closeEditState}
                    closeDeleteState={this.props.closeDeleteState}/>
            </div>
        )
    }
}

export default EditDirty