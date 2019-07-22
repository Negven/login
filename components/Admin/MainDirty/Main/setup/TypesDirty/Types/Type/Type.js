import React from 'react'
import Classes from'./Type.module.css'
import book from './book.svg'
import del from './delete.svg'
import rewrite from './rewrite.svg'
import EditDirty from './EditDirty/EditDirty';

class Type extends React.Component {
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
    
    enterTypeLine = (id) => {
        // document.getElementById(id).classList.value = Classes.enterTypeLine
    }

    leaveTypeLine = (id) => {
        // document.getElementById(id).classList.value = Classes.typeLine
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
                                    stateFunc={this.props.stateFunc.stateFuncChangType} 
                                    type={this.props.types[this.props.i]} 
                                    closeDelete={this.closeEditState}
                                    id={this.props.i}/>
        } else this.state.popUp = null;
        // debugger
        return(
            <div className={Classes.typeLine} onMouseLeave={() => {this.leaveTypeLine("lineType" + this.props.i)}} id={"lineType" + this.props.i} onMouseEnter={() => {this.enterTypeLine("lineTypey" + this.props.i)}}> 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name}</div>
                <div className={Classes.teachBtn}>{this.props.state.shortName}</div>
                <div className={Classes.teachBtn} onClick={this.openEditState}><img src={rewrite}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openDelete(this.props.i)}}><img src={del}/></div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Type