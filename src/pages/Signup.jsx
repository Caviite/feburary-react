import React, { useState } from 'react'
import { publicInstance } from '../api/api';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            maxWidth: '400px',
            margin: '50px auto',
            padding: '32px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
        },
        label: {
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '2px'
        },
        input: {
            width: '100%',
            padding: '10px 12px',
            fontSize: '14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            outline: 'none',
            boxSizing: 'border-box'
        },
        inputFocus: {
            borderColor: '#3b82f6',
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
        },
        button: {
            width: '100%',
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#ffffff',
            backgroundColor: '#3b82f6',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            marginTop: '8px'
        }
    };
    // states
    // const [disable, setDisable] = useState('')
    const [email, setEmail] = useState('')        // Stores email
    const [password, setPassword] = useState('')  // Stores password
    const [name, setName] = useState('')  // Stores name
    const [error, setError] = useState('')        // Stores error messages
    const [loading, setLoading] = useState(false) // Stores loading messages
    const navigate = useNavigate()

    const handleSubmit = async () => {
        setError('')
        

        if (!password || !email || !name) {
            setError('please fill in all fields')
            return
        }

        setLoading(true)

        console.log('name :', name);
        console.log('Password :', password);
        console.log('Email :', email);

        try {
            const response = await publicInstance.post("/auth/register", { name: name, email: email, password: password })
            console.log(response);

            if (response.status === 201 || response.data) {
                setLoading(true)
                console.log(response);
                alert('Account Created Successfully');
                setName('')
                setEmail('')
                setPassword('')
                navigate('/Login')
            } else {
                setError('Signup failed')
            }

        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={styles.container}>
            <h1>Create An Account</h1>
            <label style={styles.label} htmlFor="name" name="name">Name</label>
            <input
                type="text"
                id='name'
                style={styles.input}
                placeholder='john Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label style={styles.label} htmlFor="email" name="email">Email</label>
            <input
                type="email"
                id='email'
                style={styles.input}
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label style={styles.label} htmlFor="pasword" name="pasword">Password</label>
            <input
                type="password"
                id='pasword'
                style={styles.input}
                placeholder='******'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="button" style={styles.button} onClick={handleSubmit}>
                {loading ? 'Signing up...' : 'SignUp'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default Signup
