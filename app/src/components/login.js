import React from "react";

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            login: "",
            password: "",
            loginError: <p></p>,
            passwordError: <p></p>,
            language: [],
            allLanguage: {
              EN: ["", "", "", "", "", "", "", ""],
              PL: ["Witamy!", "Wpisz Email lub login", "Błędny login lub hasło", "Hasło", "Błędne hasło lub login", "Login", "Zapomniałeś hasła?", "Powrót"]
        }}
    }
    
    render(){
        return (
          <div>
            <input type={"text"} name="login" />
            <input type={"text"} name="session" />
          {/* <img src="http://localhost:3000/v1/files/get/icons/icon.png" /> */}
          </div>
        )
      }
}