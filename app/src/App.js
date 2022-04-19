import { Routes ,Route, BrowserRouter} from 'react-router-dom';
import React, { useEffect } from 'react';

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Index from './components';
import Facilities from './components/facilities';
import Login from './components/login';
import ServicePage from './components/service';
import NotFound from './components/notFound';
import { useState } from 'react';

// function App() {
//   const [ sessionID ] = useState("")
//   // get sessionID
//   // const sessionID = false
//   // if(sessionStorage.getItem("sessionID")){
//   //   console.log("1");
//   //   console.log(sessionStorage.getItem("sessionID"));
//   // }else{
//   //   const headers = {
//   //     'apiKey': process.env.FERNN_API_KEY
//   //   }
  
//     const headers = {
//       'apiKey': process.env.FERNN_API_KEY
//     }
//     console.log(`${process.env.REACT_FERNN_API_HOST}/v1/auth/create/session`);
//     // const result = axios.get(`${process.env.REACT_FERNN_API_HOST}/v1/auth/create/session`, {headers}).then((res) => {
//     //   sessionID = res
//     // })
//   //   useEffect(() => {
//   //     console.log(process.env.FERNN)
//   // }, [])
//   //   console.log("2");
//   //   sessionStorage.setItem("sessionID", result.session)
//   //   console.log(sessionStorage.getItem("sessionID"));
//   // }
  
//   return (
//     <div>
//       <BrowserRouter basename='/'>
//         <Routes>
//           <Route exact path="/" element={<Index session={sessionID} />} />
//           <Route path="/login" element={<Login session={sessionID} />} />
//           <Route path="/a" element={<Facilities session={sessionID} />} />
//           <Route path="/g" element={<ServicePage session={sessionID} />} />
//           <Route path="*" element={<NotFound session={sessionID} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App;

// function App() {
//   // get sessionID
//   const sessionID = false
//   if(sessionStorage.getItem("sessionID")){
//     console.log("1");
//     console.log(sessionStorage.getItem("sessionID"));
//   }else{
//     const headers = {
//       'apiKey': process.env.FERNN_API_KEY
//     }
//     const result = await axios.get(`${process.env.FERNN_API_HOST}/v1/auth/create/session`, {headers})
//     console.log("2");
//     sessionStorage.setItem("sessionID", result.session)
//     console.log(sessionStorage.getItem("sessionID"));
//   }
  
//   return (
//     <div>
//       <BrowserRouter basename='/'>
//         <Routes>
//           <Route exact path="/" element={<Index session={sessionID} />} />
//           <Route path="/login" element={<Login session={sessionID} />} />
//           <Route path="/a" element={<Facilities session={sessionID} />} />
//           <Route path="/g" element={<ServicePage session={sessionID} />} />
//           <Route path="*" element={<NotFound session={sessionID} />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }


export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      sessionID: false
    }

    // this.aa = this.aa.bind(this)
  }

  async componentDidMount(){
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': '97e0d315477f435489cf04904c9d0e6co',
      'apiKey': process.env.REACT_APP_FERNN_API_KEY
    }
    const result = await axios({
      method: 'post',
      url: `${process.env.REACT_APP_FERNN_API_HOST}/v1/auth/create/session`,
      withCredentials: false,
      headers: headers
    })
    this.setState({sessionID: result.data.session})
  }

  render(){
    // this.aa()
    return (
      <div>
        <BrowserRouter basename='/'>
          <Routes>
            <Route exact path="/" element={<Index session={this.state.sessionID} />} />
            <Route path="/login" element={<Login session={this.state.sessionID} />} />
            <Route path="/a" element={<Facilities session={this.state.sessionID} />} />
            <Route path="/g" element={<ServicePage session={this.state.sessionID} />} />
            <Route path="*" element={<NotFound session={this.state.sessionID} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
};