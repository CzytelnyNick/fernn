import React from "react"
import Nav from "../widgets/nav"

import './../scss/default.scss'

export default class Facilities extends React.Component{
    constructor(){
        super()
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
            }
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

    render(){ 
        
        return (
            <div className="screen" >
                <div className="leftPart d-none d-lg-block" style={{width: this.state.leftNav.width+"px"}}>
                    <nav aria-expanded="false">
                        <div className="smallNav" style={{
                            opacity: 1-this.state.leftNav.opacity, 
                            display: (this.state.leftNav.opacity==1) ? "none" : "block"
                        }}>
                            <div className="navItem active">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/home.png" alt=""/>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/add-property.png" alt=""/>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/data-sheet.png" alt=""/>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/material-rounded/50/ffffff/combo-chart.png" alt=""/>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/settings.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="fullNav" style={{opacity: this.state.leftNav.opacity}}>
                            <div className="navItem active">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/home.png" alt=""/>
                                    <span className="itemContent">Home</span>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/add-property.png" alt=""/>
                                    <span className="itemContent">Add</span>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/data-sheet.png" alt=""/>
                                    <span className="itemContent">Complaints</span>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/material-rounded/50/ffffff/combo-chart.png" alt=""/>
                                    <span className="itemContent">Statystyki</span>
                                </div>
                            </div>
                            <div className="navItem">
                                <div>
                                    <img src="https://img.icons8.com/fluent-systems-regular/50/ffffff/settings.png" alt=""/>
                                    <span className="itemContent">settings</span>
                                </div>
                            </div>
                        </div>

                        <div className="toogleNav" style={{left: (this.state.leftNav.width-50)/2+"px"}}>
                            <img onClick={this.toogleLeftNav} style={{transform: `rotate(${this.state.leftNav.toogleRotate}deg)`}} src="https://img.icons8.com/external-those-icons-fill-those-icons/50/ffffff/external-right-arrows-those-icons-fill-those-icons-5.png" />

                        </div>
                    </nav>
                </div>
                <div className="topPart">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <div class="container-fluid">
                            <div class="navbar-brand logo" href="#">
                                <img src="http://localhost:3000/v1/files/get/system/icons/f.png" alt="" />
                                <img src="http://localhost:3000/v1/files/get/system/icons/e.png" alt="" />
                                <img src="http://localhost:3000/v1/files/get/system/icons/r.png" alt="" />
                                <img src="http://localhost:3000/v1/files/get/system/icons/n.png" alt="" />
                                <img src="http://localhost:3000/v1/files/get/system/icons/n.png" alt="" />
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div> 

                <div className="rightPart" style={{
                    left: this.state.window.innerWidth<=990 ? "0px" : this.state.leftNav.width+"px", 
                    width: this.state.window.innerWidth<=990 ? "100%" : this.state.window.innerWidth-this.state.leftNav.width+"px", 
                    height: this.state.window.innerHeight-70+"px"}}>
                    <Nav state={this.state} navChangePosition={(a) => {}} navChangeComplaintListType={() => {}} /> 
                    sdfsdf
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    sdfsdf
                </div>
            </div>
        )
    }
}