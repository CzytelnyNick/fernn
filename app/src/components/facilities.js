import React, { useState } from "react"

import CreateScreen from "./createScreenWidgets"

import './../scss/default.scss'
import FacilitiesMainNav from "../widgets/nav/facilitiesNav"


export default class Facilities extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            window: {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            },
            name: document.cookie.set,
            leftNav: {
                extend: false,
                opacity: 0,
                width: 90,
                toogleRotate: 0,
                animation: () => {}
            },
            actualScreen: 0,
            screen: []
        }

        window.addEventListener("resize", (e) => {
            const wind = {
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            }
            this.setState({window: wind})
        })
        
        this.toogleLeftNav = this.toogleLeftNav.bind(this)
    }

    toogleLeftNav(){
        if(this.state.leftNav.extend)
            this.setState({leftNav: Object.assign(this.state.leftNav, {extend: false})})
        else
            this.setState({leftNav: Object.assign(this.state.leftNav, {extend: true})})
            
        this.setState({leftNav: Object.assign(this.state.leftNav, {opacity: this.state.leftNav.extend*1})})

        this.setState({leftNav: Object.assign(this.state.leftNav, { animation: setInterval(() => {
            if(this.state.leftNav.extend){
                this.setState({leftNav: Object.assign(this.state.leftNav, {toogleRotate: this.state.leftNav.toogleRotate-5.2941176470588235294117647058824})})
                this.setState({leftNavWidth: Object.assign(this.state.leftNav, {width: this.state.leftNav.width+5})})
            }else{
                this.setState({leftNav: Object.assign(this.state.leftNav, {toogleRotate: this.state.leftNav.toogleRotate+5.2941176470588235294117647058824})})
                this.setState({leftNavWidth: Object.assign(this.state.leftNav, {width: this.state.leftNav.width-5})})
            }
            if(this.state.leftNav.width>250 && this.state.leftNav.extend)
            clearInterval(this.state.leftNav.animation)
            
            if(this.state.leftNav.width<100 && !this.state.leftNav.extend)
                clearInterval(this.state.leftNav.animation)
        })})})
    }

    changeScreen(){

    }

    async componentDidMount(){
    }

    render(){ 
        return (
            <div className="screen" >
                <FacilitiesMainNav window={this.state.window} leftNav={this.state.leftNav} toogleLeftNav={this.toogleLeftNav.bind(this)} />

                <div className="rightPart" style={{
                    left: this.state.window.innerWidth<=990 ? "0px" : this.state.leftNav.width+"px", 
                    width: this.state.window.innerWidth<=990 ? "100%" : this.state.window.innerWidth-this.state.leftNav.width+"px", 
                    height: this.state.window.innerHeight-70+"px"}}>

                    <CreateScreen getScreen={this.state.actualScreen } changeScreen={this.changeScreen}  />
                    
                </div>
            </div>
        )
    }
}