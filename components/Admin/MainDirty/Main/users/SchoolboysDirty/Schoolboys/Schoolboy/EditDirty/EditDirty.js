import React from 'react'
import Edit from './Edit/Edit';

class EditDirty extends React.Component {
    constructor(props){
        super(props)
    }


    
    render(){
        return(
            <><Edit 
                    stateFunc={this.props.stateFunc}
                    schoolboy={this.props.schoolboy} 
                    id={this.props.id}
                    closeDelete={this.props.closeDelete}/>
            </>
        )
    }
}

export default EditDirty