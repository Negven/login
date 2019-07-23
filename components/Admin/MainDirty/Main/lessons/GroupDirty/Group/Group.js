import React from 'react'
import Classes from './Group.module.css'

class Group extends React.Component{

    render(){
        return(
            <>
                <div className={Classes.title}>Групування</div>
                {this.props.groups.map((el, i) => {
                    return(
                        <div key={"group" + i}>
                            <div className={Classes.lesson}>{ this.props.lessons[i].name }</div>
                            <div>{ el.map((e, i) => {
                                return(
                                    <div  key={"groupLine" + i}>
                                        <div className={Classes.nameGroup}>{ e.name }</div>
                                        <div>
                                            { e.pupils.map((e, i) => {
                                                return(
                                                    <div className={Classes.linePupil}> 
                                                        <div className={Classes.num}>{ i }</div>
                                                        <div className={Classes.nameTeacher}>{ this.props.schoolboys[e].name.secondName + ' ' + 
                                                               this.props.schoolboys[e].name.firstName + ' ' +
                                                               this.props.schoolboys[e].name.lastName }</div>
                                                    </div>
                                                )
                                            })}
                                        </div> 
                                    </div> 
                                )
                            })}</div>
                        </div>
                    )})}
            </>
        )
    }
}

export default Group