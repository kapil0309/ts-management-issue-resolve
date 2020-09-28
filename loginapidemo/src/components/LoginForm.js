import React, { Component } from 'react';
import DashboardSA from './DashboardSA';
import axios  from 'axios';
//import { Redirect } from "react-router-dom";

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loginSuccess : false,
            firstLoad: true,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogout = (e) => {
        this.setState({ loginSuccess:false, firstLoad:true })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //const { username, password } = this.state;
        //alert(this.state.username);
        //alert(this.state.password);
        const apiUrl = 'http://demo-login-service-dev-st.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/Login/'+ this.state.username+ '/'+ this.state.password;
        //alert(apiUrl);
        
        axios.get(apiUrl)
            .then(res => {
                //console.log(res);
                console.log(res.data);
                if(res.data.statusCode===200)
                {
                    //alert('login success');
                    this.setState({loginSuccess: true})
                }
                else
                {
                    //alert('incorrect username / password')
                    this.setState({ loginSuccess: false })
                    this.setState({ firstLoad: false })
                }
            })
    }


    render(){

        if (this.state.loginSuccess===true){
            //alert(this.state.loginSuccess) 
            //return <Redirect to='/App' />
            return(
                <DashboardSA />
                /*
                <div className='jumbotron'>
                    <h1>Page redirected on successful login</h1>
                    <br/>
                    <button type='button' class='btn btn-danger' onClick={this.handleLogout}>Logout</button>
                    
                </div>
                */
            )
        }

        else{
            return(
        //const {username, password} = this.state;
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <title>Login</title>
                    <div className="container body-content">
                        <div className="form-group">
                            <div>
                                <h3>Login</h3>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="Username">User</label>
                                <input className="form-control" id="Username" maxLength={20} name="username" type="text" onChange={this.handleChange}/>
                              
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="Password">Password</label>
                                <input className="form-control" data-val="true" data-val-required="Password Required" id="password" maxLength={30} name="password" type="password" onChange={this.handleChange}/>
                              
                            </div>
                        </div>
                        <div className="form-group">
                            <div>
                                <input id="Submit1" className="btn btn-success" type="submit" defaultValue="Sign in To Account" />
                            </div>
                        </div>
                    </div>
                    
                </form>
                {
                    this.state.firstLoad ?
                            <div></div>
                    : 
                            <div className="alert alert-danger" role="alert" style={{ margin: 'auto', width: '50%', padding: '10px'}}>Incorrect username / password</div>
                }

            </div>
        )}

    }
}

export default LoginForm;
