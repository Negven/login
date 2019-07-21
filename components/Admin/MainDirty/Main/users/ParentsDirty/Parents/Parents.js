import React from 'react'
import Parent from './Parent/Parent'
import Classes from './Parents.module.css'
import plus from './plus.svg'
import AddParentsDirty from './AddParentsDirty/AddParentsDirty';

class Parents extends React.Component {
    constructor(props){
        super(props)
    }


    stateAdd=null;

    render(){
        if(this.props.stateAdd === 1){
            this.stateAdd = <AddParentsDirty closeAddParent={this.props.closeAddParent} addParent={this.props.addParent}/>
        } else this.stateAdd = null

        return(
            <div>
                {this.stateAdd}
                <div className={Classes.addTeach}>
                    <div>Батьки</div>
                    <div className={Classes.addBtn} onClick={this.props.openAddParent}><img src={plus}/></div>
                </div>
                <div className={Classes.parentLine}>
                    <div className={Classes.numberTitle}>№</div>
                    <div className={Classes.idTitle}>ID</div>
                    <div className={Classes.nameTitle}>ПІБ</div>
                    <div className={Classes.mailTitle}>Email</div>
                    <div className={Classes.phoneTitle}>Номер телефону</div>
                </div>
                {this.props.state.map((e, i) => {
                    return(
                        <Parent 
                            state={e}
                            i={i}
                            stateFunc = {this.props.stateFunc}
                            lessons = {this.props.lessons}
                            parents = {this.props.state}
                            profession={this.props.profession} 
                            openDelete={this.props.openDelete}
                            openAdd={this.props.openAdd}
                            
                            key={"parent" + i}
                            />
                    )
                })}
                
            </div>
        )
    }
}

export default Parents