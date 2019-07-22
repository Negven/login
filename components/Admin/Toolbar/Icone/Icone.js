import React from 'react'
import Group from './Group.svg'
import Name from './Name.svg'
import Classes from'./Icone.module.css'

class Icone extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={Classes.lineBar}>
                <div className={Classes.icone}><img src={Group}/></div>
                <div className={Classes.title}><img src={Name} /></div>
            </div>
            
        )
    }
}

export default Icone