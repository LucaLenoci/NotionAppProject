import React, { useState, FormEvent } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';




const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can add your authentication logic
        // For example, you can send a request to your backend server to verify the credentials

        // For demonstration, let's just log the username and password
        console.log('Username:', username);
        console.log('Password:', password);

        // After successful authentication, you can redirect the user to another page
        // For example, you can use React Router: history.push('/dashboard');
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center' }}>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '8px' }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <TextField
                                variant="outlined"
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <Button variant="contained" type="submit">Login</Button>
                        </div>
                        <div>
                            Are you not registered?
                            <div style={{ marginTop: '8px' }}>
                            <Link to="/registration">
                                <Button variant="contained">Sign Up</Button>
                            </Link></div> 
                        </div>
                        
                    </form>
                </div>
            </Grid>
        </Grid>
    );

};

export default LoginPage;
