import React, { useContext, useState } from 'react'
import { userContext } from '../context/userContext';

function Register() {
  const [username, setUsername] = useState()
  const { setName } = useContext(userContext)



  const handleSubmit = () => {
    console.log(username);
    setName(username)

  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '4px'
    },
    input: {
      width: '100%',
      padding: '10px 12px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      transition: 'border-color 0.2s ease',
      outline: 'none',
      '&:focus': {
        borderColor: '#007bff'
      }
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      '&:hover': {
        backgroundColor: '#0056b3'
      }
    }
  };

  return (
    <div style={styles.container}>
      <label htmlFor="username" style={styles.label}>Username</label>
      <input
        type="text"
        value={username}
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
    </div>
  )
}

export default Register
