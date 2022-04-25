import axios from "axios";
import React from "react";

import Nav from "../widgets/nav/nav";


export default class CreateScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {widgets: []}
    }

    async componentDidMount(){
        console.log(`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/screens/screen${this.props.getScreen}.json`);
        // console.log("upd");
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'apiKey': process.env.REACT_APP_FERNN_API_KEY
        }
        const res = await axios({
            method: 'get',
            url: `${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/screens/screen${this.props.getScreen}.json`,
            withCredentials: false,
            headers: headers
        })
        console.log("res", res);

        this.setState({widgets: await res.data})
        console.log(res);
    }

    getWidget(widget, i){
        switch(widget.name){
            case 'nav/quickNav':
                return <Nav widget={widget} changeScreen={this.props.changeScreen} />

            case 'add/scree1':
                break;
            case 'add/scree2':
                break;
            case 'add/scree3':
                break;
            case 'add/scree4':
                break;
            case 'add/scree5':
                break;
                
            case 'complaint/list':
                break;
            case 'complaint/edit':
                break;
            case 'complaint/attachment':
                break;

            case 'statistic/main':
                break;
            case 'statistic/raports':
                break;

            case 'settings/account/account':
                break;    
            case 'settings/account/device':
                break; 
            case 'settings/account/thrubnail':
                break;

            case 'settings/company/accounts':
                break;
            case 'settings/company/addAccounts':
                break;
            case 'settings/company/data':
                break;
            case 'settings/company/sections':
                break;
            case 'settings/company/logo':
                break;
            case 'settings/company/dafaultValue':
                break;

            case 'settings/company/licence':
                break;
            case 'settings/company/addComplaints':
                break;
            case 'settings/company/addAccount':
                break;
            case 'settings/company/changePlan':
                break;
            case 'settings/company/changePlan':
                break;
            case 'settings/company/changePlan':
                break;
            default:
                return (<div>5454556545555</div>)
        }       
        
    }
    render(){
        try{
            console.log("st", this.state.widgets.widgetsList);
            // // this.state.widgets.map(() => {})
            return <div>{this.state.widgets.widgetsList.map((el, i) => this.getWidget(el, i))}</div>
            // return <div></div>
        }catch(e){
            console.log(e);
            return <h1>EU-08</h1>
          }
        // if(Array.isArray(this.state.widgets)){
        //     
        // }else{
        //     try{
        //     }catch(e){}
        //     return <h1>EU-08</h1>
        // // }
    }
}