import React, { Component } from 'react';
import Input from '../components/Input';
import { login } from '../services/apiCalls';
import AuthService from '../services/AuthService';

import Button from '../notifications/Button';


class LoginPage extends Component {

    constructor(props){
        super(props)
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onChange = this.onChange.bind(this);

        }

        state={
            firstName: null,
            password: null,
            error: null
        }

    onChange = Event => {
        const { name, value } = Event.target;
        this.setState({
            [name]: value,
            error: null
        })
    }

    onClickSignUp = Event => {
        Event.preventDefault();
        this.props.history.push("/signup");
    }

    onClickLogin = async Event => {
        Event.preventDefault();

        /*
        const { firstName2, password } = this.state
        const creds = {
            firstName2,
            password
        }
        */
        //login(creds)
        //AuthService.login(creds);
        let user = { firstName: this.state.firstName, lastName: null, emailId: null, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));
        const name = "demo"
        const pass = "demo"
        console.log(name, pass)
        try{
            await AuthService.login(name, pass);
            //await AuthService.login(user);
            this.props.history.push("/students");
            
        }catch(apiError) {
            this.setState({
                error: apiError.response.data.message      
            })
        }
        
        /*
        try{
            await AuthService.login(this.state.firstName2, this.state.password);
        }catch (apiError) {
            this.setState({
                error: apiError.response.data.message
            })
        }
        */
    }
    

    render() {
        return (
            <div className='container'>
                <form>
                    <h1 className='text-center'>Login</h1>
                    {/* <Input label='First Name (user name)' name="firstName1" onChange={this.onChange} /> */}

                    <div className='form-group'>
                    <label>First Name user name</label>
                    <input className ='form-control' name="firstName" onChange={this.onChange}/>
                </div>

                    <Input  label='Password' name="password" onChange={this.onChange} type="password" />
                    { this.state.error && <div className='alert alert-danger'> {this.state.error} </div> }
                    <div className='text-center'>
                    <button style={{marginTop: "10px"}} className='btn btn-primary' onClick={this.onClickLogin}>Login</button>
                    <button style={{marginTop: "10px", marginLeft: "10px"}} className='btn btn-primary' onClick={this.onClickSignUp}>Sign up</button>
                    </div>
                    
                </form>
                
            </div>
        );
    }
}

export default LoginPage;