import React from 'react'
import Classes from './Delete.module.css'

class Delete extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className={Classes.backSide}>
                </div>
                <div className={Classes.topUp}>
                    <div className={Classes.closeTitle}>Видалити образну запись</div>
                    <div className={Classes.lineBtn}>
                        <div className={Classes.yes} 
                            onClick={() => {
                                this.props.list.splice(this.props.id, 1)
                                // if(this.props.stateMain === 2) {
                                //     this.props.stateDeleteParent(this.props.list)
                                // } else if(this.props.stateMain === 1) {
                                //     this.props.stateDeleteTeacher(this.props.list)
                                // } else if(this.props.stateMain === 3) {
                                //     this.props.stateDeleteSchoolboy(this.props.list)
                                // } else if(this.props.stateMain === 7) {
                                //     this.props.stateDeleteType(this.props.list)
                                // }
                                this.props.closeDelete();
                            }
                        }><div className={Classes.textCenter}>Так</div></div>
                        <div className={Classes.no} onClick={this.props.closeDelete}><div className={Classes.textCenter}>Ні</div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete