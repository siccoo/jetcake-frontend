import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    state = {
        user: ''
    }

    getPatientName = () => {
        let { user } = this.state
        if (user = '') {
            alert('user is required')
        } else {
            fetch('http://localhost:5000/', {
                method: 'post',
                headers: {
                    "Content-Type": "Application/json",
                    "Accept": "Application/json"
                },
                body: JSON.stringify({
                    user
                })
            })
                .then((response) => response.json())
                .then((res) => console.log(res))
                .catch(err => console.log('try again', err))
            // alert(username.value)
        }
    }

    handleChange = ({ target }) => {
        let { value, name } = target
        this.setState({ [name]: value })
    }

    submitData = () => {

    }
    render() {
        return (
            <div>
                
            <div>
                <form id='register' action=''>
                    <hgroup>
                        <h1>Personal Patient's Information</h1>
                        <label for='publication'>
                            <input type="radio"/> I would like to recieve free UPTH Publication
                        </label>

                    </hgroup>
                </form>
            </div>

            <div>
                <form role="form" onChange={this.handleChange}>
                    <div class="form-group">
                    <p>
                        <label for="name">Surname:</label>
                        <br /><input type="text" class="form-control" id="name"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">First Name:</label>
                        <br /><input type="text" class="form-control" id="name"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">Other Name:</label>
                        <br /><input type="text" class="form-control" id="name"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">Phone Number:</label>
                        <br /><input type="numbers" class="form-control" id="numbers"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">E-mail Address:</label>
                        <br /><input type="email" class="form-control" id="email"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">Password:</label>
                        <br /><input type="password" class="form-control" id="password"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="name">Confirm Password:</label>
                        <br /><input type="password" class="form-control" id="password"
                            placeholder="" />
                    </p>
                    <p>
                        <label for="">Patient's Status:</label>
                    <br /><select name="PatientStatusInput" class="form-control">
                        <option value="InPatient">Medical InPatient</option>
                        <option value="OutPatient">Medical OutPatient</option>
                    </select>
                    </p>
                    <p>
                    <label for="name">Department:</label>
                        <br /><input type="text" class="form-control" id="name"
                            placeholder="" />
                    </p>
                    <p>
                    <label for="name">Clinic:</label>
                        <br /><input type="text" class="form-control" id="name"
                            placeholder="" />
                    </p>
                    </div>
                    <p>
                    <button onClick={this.submitData} type="submit" class="btn btn-default">Generate ID</button>
                    </p>
                </form>
            </div>
           </div>
                );
    }
}

export default SignUp;