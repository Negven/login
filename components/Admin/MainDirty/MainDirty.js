import React from 'react'
import Main from './Main/Main'
class MainDirty extends React.Component {
    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <div> <Main stateFunc={this.props.stateFunc} state={this.props.state}/> </div>
        )
    }
}

export default MainDirty