import React from 'react'
import TeachersDirty from './users/TeachersDirty/TeachersDirty.js'
import ScheduleDirty from './lessons/ScheduleDirty/ScheduleDirty.js'
import Classes from './Main.module.css'
import ParentsDirty from './users/ParentsDirty/ParentsDirty.js';
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
            this.startState = <TeachersDirty 
                                            lessons={this.props.state.lessons}
                                            profession={this.props.state.profession} 
                                            stateFunc={this.props.stateFunc} 
                                            state={this.props.state.teachers}

                                        />
        } else if (this.props.state.stateMain === 2){
            this.startState = <ParentsDirty 
                                           stateFunc={this.props.stateFunc.stateFuncChangParent} 
                                           state={this.props.state.parents}
                                        />
        } else if (this.props.state.stateMain === 3){
            this.startState = <SchoolboysDirty 
                                            classes={this.props.state.classes}
                                            profession={this.props.state.profession} 
                                            stateFunc={this.props.stateFunc} 
                                            state={this.props.state.schoolboys}
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
            this.startState = <TypesDirty 
                                        stateFunc={this.props.stateFunc} 
                                        state={ this.props.state.types }                       
            />
        }
        else if(this.props.state.stateMain === 8) {
            this.startState = <LessonsDirty 
                                        stateFunc={this.props.stateFunc} 
                                        state={ this.props.state.lessons }                       
            />
        }
        else if(this.props.state.stateMain ===    9) {
            this.startState = <PositionsDirty 
                                        stateFunc={this.props.stateFunc} 
                                        profession={ this.props.state.profession }                       
            />
        }

        return(
            <div className={Classes.mainBlock}>
                {this.startState}
            </div>
        )
    }
}

export default Main