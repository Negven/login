import React from 'react'
import Schoolboy from './Schoolboy/Schoolboy'
import Classes from './Schoolboys.module.css'
import plus from './plus.svg'
import AddSchoolboyDirty from './AddSchoolboyDirty/AddSchoolboyDirty';

class Schoolboys extends React.Component {
    constructor(props){
        super(props)
    }


    stateAdd=null;

    render(){
        if(this.props.stateAdd === 1){
            this.stateAdd = <AddSchoolboyDirty profession={this.props.profession} closeAdd={this.props.closeAddSchoolboy} addSchoolboy={this.props.stateFunc.stateFuncChangSchoolboy.addSchoolboy}/>
        } else this.stateAdd = null

        return(
            <div>
                {this.stateAdd}
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                    <div className={Classes.addBtn} onClick={this.props.openAddSchoolboy}><img src={plus}/></div>
                </div>
                <div className={Classes.schoolboyLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Schoolboy 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            schoolboys = {this.props.state}
                            profession={this.props.profession} 
                            key={"schoolboy" + i}
                            closeDelete={this.props.closeDelete}
                            openDelete={this.props.openDelete}
                            openAdd={this.props.openAdd}
                            stateDelete={this.props.stateDelete}


                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Schoolboys