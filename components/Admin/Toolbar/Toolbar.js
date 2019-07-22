import React from 'react'
import Icone from './Icone/Icone'
import Classes from './Toolbar.module.css'
import ClassDirty from './ClassDirty/ClassDirty';
import Close from './Close/Close'

class Toolbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={Classes.toolbar}>
                <div className={Classes.iconeComp}><Icone/></div>
                <ClassDirty/>
                <Close changeStateLogin={this.props.changeStateLogin}/>
            </div>
        )
    }

}

export default Toolbar;