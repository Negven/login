import React from 'react'
import Classes from './Class.module.css'
class Class extends React.Component {
    constructor(props){
        super(props)
    }
    
    
    classList = [
        '1A',
        '1Б',
        '1В',
        '1Г',
        '1Д',
    ]
    value = "Вибір класу"

    open = () => {
        this.props.state.closeSelect = !this.props.state.closeSelect
        this.forceUpdate()
    }

    select = (value) => {
        this.value = value;
        this.props.state.closeSelect = !this.props.state.closeSelect
        this.forceUpdate()
    } 

    enterSelect = (id) => {
        document.getElementById(id).classList.value = Classes.cellEnter
    }

    leaveSelect = (id) => {
        document.getElementById(id).classList.value = Classes.cell
    }


    showSelect = ()=>{
         if(this.classList.length % 2 == 1) { this.classList.push('')}
         if(this.props.state.closeSelect) {
            return(
                <div className={Classes.blockSelect}>
                    <div>
                        {this.classList.map((e,i) => {
                            if(i % 2 == 0){
                                return(
                                    <div id={"classId" + i} className={Classes.cell} key={"class" + i}
                                        onClick = {() => {
                                            this.select(this.classList[i])
                                        }}
                                        onMouseEnter = { () => {
                                            this.enterSelect("classId" + i)
                                        }}
                                        onMouseLeave = { () => {
                                            this.leaveSelect("classId" + i)
                                        }}
                                    >{e}</div>
                                )
                            }
                        })}
                    </div>
                    <div>
                        {this.classList.map((e,i) => {
                            if(i % 2 == 1){
                                if(e == ''){
                                    return(
                                            <div className={Classes.cell} key={"class" + i}></div>
                                        )
                                }else{
                                return(
                                    <div id={"classId" + i} className={Classes.cell} key={"class" + i}
                                    onClick = {() => {
                                        this.select(this.classList[i])
                                    }}
                                    onMouseEnter = { () => {
                                        this.enterSelect("classId" + i)
                                    }}
                                    onMouseLeave = { () => {
                                        this.leaveSelect("classId" + i)
                                    }}
                                    >{e}</div>
                                )
                            }}
                        })}
                    </div>
                </div>
            )
         }
    }

    render(){
        return(
            <div className={Classes.mainSelect}>
                <div className={Classes.select}>
                    <div className = {Classes.value} onClick={this.open}><div >{this.value}</div></div>
                    <div  className={Classes.block}>
                        {this.showSelect()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Class