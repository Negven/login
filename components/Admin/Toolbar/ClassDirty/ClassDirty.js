import React from 'react'
import Class from './Class/Class';

class ClassDirty extends React.Component {
    constructor(props){
        super(props)
    }
    
    state = {
        closeSelect: false
    }

    render(){
        return(
            <div className="choose">
                <Class state={this.state}/>
            </div>
        )
    }
}

export default ClassDirty