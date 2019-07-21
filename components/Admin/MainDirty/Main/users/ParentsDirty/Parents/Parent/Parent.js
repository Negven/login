import React from 'react'
import Classes from'./Parent.module.css'
import book from './book.svg'
import del from './delete.svg'
import rewrite from './rewrite.svg'
import EditDirty from './EditDirty/EditDirty';

class Parent extends React.Component {
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
    
    enterParentLine = (id) => {
        document.getElementById(id).classList.value = Classes.enterParentLine
    }

    leaveParentLine = (id) => {
        document.getElementById(id).classList.value = Classes.parentLine
    }

    // openDeleteState = () => {
    //     this.statePopUp = 1
    //     this.forceUpdate()
    // }

    // closeDeleteState = () => {
    //     this.leavePerentLine("linePerent" + this.props.i)
    //     this.statePopUp = 0
    //     this.forceUpdate()
    // }



    openEditState = () => {
        this.statePopUp = 3
        this.forceUpdate()
    }


    closeEditState = () => {
        this.statePopUp = 0
        console.log(1)
        this.forceUpdate()
    }

    render(){
        if (this.statePopUp === 3){
            this.state.popUp = < EditDirty 
                                    stateFunc={this.props.stateFunc} 
                                    parent={this.props.parents[this.props.i]} 
                                    profession={this.props.profession} 
                                    closeDeleteState={this.closeDeleteState}
                                    closeEditState={this.closeEditState}
                                    id={this.props.i}/>
        } else this.state.popUp = null;
        return(
            <div 
                className={Classes.parentLine}
                onMouseLeave={() => {
                    this.leaveParentLine("lineParent" + this.props.i)}}
                id={"lineParent" + this.props.i} 
                onMouseEnter={() => {this.enterParentLine("lineParent" + this.props.i)}}
            > 
                <div className={Classes.number}>{this.props.i}</div>
                <div className={Classes.id}>{this.props.state.id}</div>
                <div className={Classes.name}>{this.props.state.name.secondName} {this.props.state.name.firstName} {this.props.state.name.lastName}</div>
                <div className={Classes.mail}>{this.props.state.mail}</div>
                <div className={Classes.numberBlock}>{this.props.state.phones}</div>
                <div className={Classes.teachBtn} onClick={this.openEditState}><img src={rewrite}/></div>
                <div className={Classes.teachBtn}  onClick={() => {console.log(this.props.i); this.props.openAdd(this.props.i)}}><img src={book}/></div>
                <div className={Classes.teachBtn} onClick={() => {console.log(this.props.i); this.props.openDelete(this.props.i)}}><img src={del}/></div>
                {this.state.popUp}
            </div>
        )
    }
}

export default Parent