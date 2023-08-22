'use client';

import React, { useRef } from 'react'

function LoginPage() {
    const ref = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const [username, password] = ref.current.querySelectorAll('input');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username: username.value, password: password.value }),
            });

            console.log(await response.text())
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form ref={ref}>
            <label htmlFor='username'>Username:</label> <br />
            <input id='username' /><br />

            <label htmlFor='password'>Password:</label> <br />
            <input id='password' /><br />

            <input type='submit' value='Login' onClick={onSubmit} />
        </form>
    )
}

export default LoginPage;