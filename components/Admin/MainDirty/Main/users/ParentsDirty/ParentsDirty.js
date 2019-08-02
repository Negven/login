import React from 'react'
import Parents from './Parents/Parents'

class ParentsDirty extends React.Component {
    constructor(props){
        super(props)
    }



    render(){
        return(
            <div> <Parents
                    stateFunc={this.props.stateFunc}
                    state={this.props.state}
                    />
                    </div>
        )
    }
}

export default ParentsDirty

