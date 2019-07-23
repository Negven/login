import React from 'react'
import Group from './Group/Group';

class GroupDirty extends React.Component {
    
    render(){
        return(
            <>
                <Group 
                    groups ={ this.props.groups }
                    schoolboys={ this.props.schoolboys }
                    lessons={this.props.lessons}
                />
            </>
        )
    }
}

export default GroupDirty