import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SignUp.scss';


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Mobilenumber: '',
        address: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Mobilenumber:', formData.Mobilenumber);
        console.log('address:', formData.address);
        console.log('Password:', formData.password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Mobile Number:</label>
                <input 
                    type="text" 
                    name="Mobilenumber" 
                    value={formData.Mobilenumber} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Address:</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;