import React from 'react'
import TeachersDirty from './users/TeachersDirty/TeachersDirty.js'
import ScheduleDirty from './lessons/ScheduleDirty/ScheduleDirty.js'
import Classes from './Main.module.css'
import ParentsDirty from './users/ParentsDirty/ParentsDirty.js';
import Delete from './Delete/Delete.js';
import Add from './users/Add/Add.js';
import SchoolboysDirty from './users/SchoolboysDirty/SchoolboysDirty.js';
import TypesDirty from './setup/TypesDirty/TypesDirty.js';
import LessonsDirty from './setup/LessonsDirty/LessonsDirty.js';
import PositionsDirty from './setup/PositionsDirty/PositionsDirty.js';
import GroupDirty from './lessons/GroupDirty/GroupDirty.js';

class Main extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    startState = null;
    

    render(){
        if(this.props.state.stateMain === 1){
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                                                    stateMain={this.props.state.stateMain}
                                                    id={this.props.state.id}
                                                    list={this.props.state.teachers}
                                                    stateDeleteTeacher={this.props.stateFunc.stateFuncChangTeacher.stateDeleteTeacher}
                                                    closeDelete={this.props.stateFunc.closeDelete}
                                                />
            }else if (this.props.state.stateDelete === 2){
                this.props.state.popUpDelete = <Add
                                                    stateMain={this.props.state.stateMain}
                                                    id={this.props.state.id}
                                                    list={this.props.state.teachers[this.props.state.id].lessons}
                                                    closeDelete={this.props.stateFunc.closeDelete}     
                                                    selectLesson={this.props.stateFunc.selectLesson}   
                                                    lessons={this.props.state.lessons}
                                                    closeDelete={this.props.stateFunc.closeDelete}
                                                    deleteLesson={this.props.stateFunc.deleteLesson}
                                                    
                                                />
            } else this.props.state.popUpDelete=null
            this.startState = <TeachersDirty 
                                            lessons={this.props.state.lessons}
                                            profession={this.props.state.profession} 
                                            stateFunc={this.props.stateFunc} 
                                            state={this.props.state.teachers}
                                            openDelete={this.props.stateFunc.openDelete}
                                            openAdd={this.props.stateFunc.openAdd}
                                            closeDelete={this.props.stateFunc.closeDelete}

                                        />
        } else if (this.props.state.stateMain === 2){
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                                                    stateMain={this.props.state.stateMain}
                                                    id={this.props.state.id}
                                                    list={this.props.state.parents}
                                                    stateDeleteParent={this.props.stateFunc.stateFuncChangParent.stateDeleteParent}
                                                    closeDelete={this.props.stateFunc.closeDelete}
                                                />
            } else if (this.props.state.stateDelete === 2){
            this.props.state.popUpDelete = <Add
                                                stateMain={this.props.state.stateMain}
                                                id={this.props.state.id}
                                                list={this.props.state.parents[this.props.state.id].children}
                                                closeDelete={this.props.stateFunc.closeDelete}     
                                                selectChildren={this.props.stateFunc.stateFuncChangParent.selectChildren}   
                                                closeDelete={this.props.stateFunc.closeDelete}
                                                deleteChildren={this.props.stateFunc.stateFuncChangParent.deleteChildren}
                                            />
        } else this.props.state.popUpDelete=null
            this.startState = <ParentsDirty 
                                           addParent={this.props.stateFunc.addParent}
                                           stateFunc={this.props.stateFunc.stateFuncChangParent} 
                                           state={this.props.state.parents}
                                           openDelete={this.props.stateFunc.openDelete}
                                           openAdd={this.props.stateFunc.openAdd}
                                        />
        } else if (this.props.state.stateMain === 3){
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                                                    stateMain={this.props.state.stateMain}
                                                    id={this.props.state.id}
                                                    list={this.props.state.schoolboys}
                                                    stateDeleteSchoolboy={this.props.stateFunc.stateFuncChangSchoolboy.stateDeleteSchoolboy}
                                                    closeDelete={this.props.stateFunc.closeDelete}
                                                />
            } else if (this.props.state.stateDelete === 2){
                console.log(this.props.state)
            this.props.state.popUpDelete = <Add
                                                stateMain={this.props.state.stateMain}
                                                id={this.props.state.id}
                                                list={this.props.state.parents[this.props.state.id].children}
                                                closeDelete={this.props.stateFunc.closeDelete}     
                                                selectChildren={this.props.stateFunc.stateFuncChangParent.selectChildren}   
                                                closeDelete={this.props.stateFunc.closeDelete}
                                                deleteChildren={this.props.stateFunc.stateFuncChangParent.deleteChildren}
                                            />
        } else this.props.state.popUpDelete=null
            this.startState = <SchoolboysDirty 
                                            classes={this.props.state.classes}
                                            profession={this.props.state.profession} 
                                            stateFunc={this.props.stateFunc} 
                                            state={this.props.state.schoolboys}
                                            openDelete={this.props.stateFunc.openDelete}
                                            openAdd={this.props.stateFunc.openAdd}
                                            closeDelete={this.props.stateFunc.closeDelete}
                                            stateDelete={this.props.stateDelete}
                                        />
        } else if(this.props.state.stateMain === 4){
            this.startState = <ScheduleDirty 
                                            schedule={this.props.state.schedule}
                                            days={this.props.state.days}
                                            stateFunc={this.props.stateFunc.stateFuncSchedule}  
                                            lessons={this.props.state.lessons}    
                                            durations={this.props.state.durations}  
                                            teachers={this.props.state.teachers}
                                            groups={this.props.state.groups}

            />
        } else if(this.props.state.stateMain === 5){
            this.startState = <GroupDirty   
                                            lessons={this.props.state.lessons}
                                            schoolboys={this.props.state.schoolboys}
                                            groups={this.props.state.groups}
            />
        }         
        else if(this.props.state.stateMain === 7) {
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                stateMain={this.props.state.stateMain}
                id={this.props.state.id}
                list={this.props.state.types}
                stateDeleteType={this.props.stateFunc.stateFuncChangType.stateDeleteType}
                closeDelete={this.props.stateFunc.closeDelete}
            />
        } else this.props.state.popUpDelete=null
            this.startState = <TypesDirty 
                                        stateFunc={this.props.stateFunc} 
                                        openDelete={this.props.stateFunc.openDelete}
                                        openAdd={this.props.stateFunc.openAdd}
                                        closeDelete={this.props.stateFunc.closeDelete}
                                        stateDelete={this.props.stateDelete} 
                                        state={ this.props.state.types }                       
            />
        }
        else if(this.props.state.stateMain === 8) {
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                stateMain={this.props.state.stateMain}
                id={this.props.state.id}
                list={this.props.state.lessons}
                stateDeleteLesson={this.props.stateFunc.stateFuncChangLesson.stateDeleteLesson}
                closeDelete={this.props.stateFunc.closeDelete}
            />
        } else this.props.state.popUpDelete=null
            this.startState = <LessonsDirty 
                                        stateFunc={this.props.stateFunc} 
                                        openDelete={this.props.stateFunc.openDelete}
                                        openAdd={this.props.stateFunc.openAdd}
                                        closeDelete={this.props.stateFunc.closeDelete}
                                        stateDelete={this.props.stateDelete} 
                                        state={ this.props.state.lessons }                       
            />
        }
        else if(this.props.state.stateMain ===    9) { 
            if(this.props.state.stateDelete === 1){
                this.props.state.popUpDelete = <Delete
                stateMain={this.props.state.stateMain}
                id={this.props.state.id}
                list={this.props.state.profession}
                stateDeletePosition={this.props.stateFunc.stateFuncChangPosition.stateDeletePosition}
                closeDelete={this.props.stateFunc.closeDelete}
            />
        } else this.props.state.popUpDelete=null
            this.startState = <PositionsDirty 
                                        stateFunc={this.props.stateFunc} 
                                        openDelete={this.props.stateFunc.openDelete}
                                        openAdd={this.props.stateFunc.openAdd}
                                        closeDelete={this.props.stateFunc.closeDelete}
                                        stateDelete={this.props.stateDelete} 
                                        profession={ this.props.state.profession }                       
            />
        }

        return(
            <div className={Classes.mainBlock}>
                {this.startState}
                {this.props.state.popUpDelete}
            </div>
        )
    }
}

export default Main