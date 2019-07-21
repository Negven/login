 import React from 'react'
 import Classes from './Close.module.css'

 class Close extends React.Component {
     constructor(props){
         super(props)
     }

     

     render(){
         return(
             <div className={Classes.closeBtn} onClick={this.props.changeStateLogin}>Вийти</div>
         )
     }
 }
 
 export default Close