import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {

    constructor(props){
        super(props)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }     
        
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({firstName: student.firstName,
                lastName: student.lastName,
                emailId: student.emailId 
            })
        });
    }

    updateStudent = (e) => {
        e.preventDefault();

        let student = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('student => ' + JSON.stringify(student));

        StudentService.updateStudent(student, this.state.id).then( res =>{
            this.props.history.push('/students')
        });

    }

    changeFirstNameHandler= (Event) => {
        this.setState({firstName: Event.target.value});
    }

    changeLastNameHandler= (Event) => {
        this.setState({lastName: Event.target.value});
    }

    changeEmailHandler= (Event) => {
        this.setState({emailId: Event.target.value});
    }

    cancel(){
        this.props.history.push('/students')
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='column'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Student</h3>
                            <div className='card-body'>
                            <form>
                            <div className='form-group'>
                                        <label>First Name:</label>
                                        <input placeholder='First Name' name="firstname" className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name:</label>
                                        <input placeholder='Last Name' name="lastName" className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email Adress:</label>
                                        <input placeholder='Email Adress' name="emailId" className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                            <button className='btn btn-success' onClick={this.updateStudent}>Update</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>                                             
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudentComponent;