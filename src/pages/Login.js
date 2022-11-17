import React, { useState, useEffect } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import './Login.css'

const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const onInputChange =(e)=>{
    let {name , value} = e.target;
    setFormValue({...formValue, [name]:value})
  }
  return(
    <div className='formContainer'>
        <h5 className='headercontainer'>Sign In</h5>
        <MDBCard className='card-container mt-2'>
        
            <MDBIcon fas icon='user-circle' className='fa-2x mt-4'/>
            
            <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} noValidate className='row g-3'>
                    <div className='col-md-12'>
                        <MDBInput label='Email'
                        type="email"
                        value = {email}
                        name = "email"
                        onChange ={onInputChange} 
                        validation = "Please provide your email"
                        required
                        invalid 
                        
                        />
                    </div>
                    <div className='col-md-12'>
                        <MDBInput label='Password'
                        type="password"
                        value = {password}
                        name = "password"
                        onChange ={onInputChange} 
                        required
                        invalid 
                        validation = "Please provide your password"
                        
                        />
                    </div>
                    <div className='col-12'>
                        <MDBBtn className='btn-container mt-2'>
                            Login
                        </MDBBtn>
                    </div>
                </MDBValidation>
            </MDBCardBody>
            <MDBCardFooter>
                <Link to = '/register'>
                    <p>
                        Don't have an account ? Sign Up
                    </p>
                </Link>
            </MDBCardFooter>
        </MDBCard>
    </div>
  )
}

export default Login
