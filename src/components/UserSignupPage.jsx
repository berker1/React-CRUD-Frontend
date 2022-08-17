import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import UserService from '../services/UserService';
import Input from '../components/Input';

class UserSignupPage extends Component {

    constructor(props){
        super(props)
        this.onClickSignUp2 = this.onClickSignUp2.bind(this);
        this.onChange = this.onChange.bind(this);
}

    state = {
    firstName: null,
    lastName: null,
    emailId: null,
    password: null,
    passwordRepeat: null,
    pendingApiCall: false,
    errors: {}
}

    onChange = (e) => {
        const { name, value } = e.target;
        const errors = { ...this.state.errors }
        errors[name] = undefined;
        if(name === 'password' || name === 'passwordRepeat'){
            if( name === 'password' && value !== this.state.passwordRepeat){
                errors.passwordRepeat = 'Password Mismatch';
            }else if(name === 'passwordRepeat' && value !== this.state.password){
                errors.passwordRepeat = 'Password Mismatch';
            }else{
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({
            [name]: value,
            errors
        });
        
    };
    // oncahnge olunca neden hata mesajı gitmiyor



    onClickSignUp2 = async (e) => {
        e.preventDefault();

        let user = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

        const { firstName, lastName, emailId, password } = this.state;

        const body = {
            firstName,
            lastName,
            emailId,
            password
        }

        this.setState({pendingApiCall: true})

        try{
            const response = await UserService.createUser(body);
            this.props.history.push("/students");
        }catch (error) {
            if (error.response.data.validationErrors){
                this.setState({ errors: error.response.data.validationErrors });
            }
        }

        this.setState({pendingApiCall: false});
        
        /*
        UserService.createUser(user)
        .then((response) => {
            this.setState({pendingApiCall: false});
        }).catch( error => {
            this.setState({pendingApiCall: false});
            this.setState({errors: error.response.data.validationErrors});
        });
        */
    }

/* 
   onChangeUserName = Event => {
        this.setState({
            username: Event.target.value
        })
    };

*/


    render() {
        const { errors } = this.state;
        const { firstname,  lastname, emailid, password, passwordRepeat } = errors;

        return (
            
            <div className='container'>
                <form>
                <h1 className='text-center'> Sign Up</h1>
                <Input name="firstName" label="First Name" error={firstname} onChange={this.onChange}></Input>
                <Input name="lastName" label="Last Name" error={lastname} onChange={this.onChange}></Input>
                <Input name="emailId" label="Email" error={emailid} onChange={this.onChange}></Input>
                <Input type="password" name="password" label="Password" error={password} onChange={this.onChange}></Input>
                <Input type="password" name="passwordRepeat" label="Paasword Repeat" error={passwordRepeat} onChange={this.onChange}></Input>
                
                <div className='text-center'>
                <button style={{marginTop: "10px"}} className='btn btn-primary' onClick={this.onClickSignUp2}
                disabled={this.state.pendingApiCall}>
                    Sign up
                </button>

                </div>
                
            </form>
            </div>
            
        );
    }
}

export default UserSignupPage;