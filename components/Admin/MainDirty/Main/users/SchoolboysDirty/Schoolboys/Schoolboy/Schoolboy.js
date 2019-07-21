import React from 'react'
import Classes from'./Schoolboy.module.css'
import book from './book.svg'
import del from './delete.svg'
import rewrite from './rewrite.svg'
import EditDirty from './EditDirty/EditDirty';

class Schoolboy extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        statePopUp: null,
        popUp: null,
    }

    phoneFunc = () => {
        if (this.props.state.phones[1] != undefined) {
            return (
                <div>, {this.props.state.phones[1]} </div>
            )
        }
    }
    
    enterSchoolboyLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterSchoolboyLine
    }

    leaveSchoolboyLine = (id) => {
        document.getElementById(id).classList.value = Classes.schoolboyLine
    }



    openEditState = () => {
        this.statePopUp = 3
        this.forceUpdate()
    }

    closeEditState = () => {
        this.statePopUp = 0
        this.forceUpdate()
    }


    

    render(){
        if (this.statePopUp === 3){
            this.state.popUp = < EditDirty 
                                    stateFunc={this.props.stateFunc.stateFuncChangSchoolboy} 
                                    schoolboy={this.props.schoolboys[this.props.i]} 
                                    closeDelete={this.closeEditState}
                                    id={this.props.i}/>
        } else this.state.popUp = null;
        // debugger
        return(
            <div className={Classes.schoolboyLine} onMouseLeave={() => {this.leaveSchoolboyLine("lineSchoolboy" + this.props.i)}} id={"lineSchoolboy" + this.props.i} onMouseEnter={() => {this.enterSchoolboyLine("lineSchoolboy" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                <div className={Classes.teachBtn} onClick={this.openEditState}><img src={rewrite}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openAdd(this.props.i)}}><img src={book}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openDelete(this.props.i)}}><img src={del}/></div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Schoolboy