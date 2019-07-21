import React from 'react'
import Type from './Type/Types'
import Classes from './Types.module.css'
import plus from './plus.svg'
import AddTypeDirty from './AddTypeDirty/AddTypeDirty';

class Types extends React.Component {
    constructor(props){
        super(props)
    }


    stateAdd=null;

    render(){
        if(this.props.stateAdd === 1){
            this.stateAdd = <AddTypeDirty profession={this.props.profession} closeAdd={this.props.closeAddType} addType={this.props.stateFunc.stateFuncChangSType.addType}/>
        } else this.stateAdd = null

        return(
            <div>
                {this.stateAdd}
                <div className={Classes.addTeach}>
                    <div>Учні</div>
                    <div className={Classes.addBtn} onClick={this.props.openAddType}><img src={plus}/></div>
                </div>
                <div className={Classes.typeLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Type 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            classes = {this.props.classes}
                            Types = {this.props.state}
                            profession={this.props.profession} 
                            key={"type" + i}
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

export default Types