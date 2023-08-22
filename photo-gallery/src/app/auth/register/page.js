import React from 'react'

function RegisterPage() {
    return (
        <form>
            <label>Username:</label> <br />
            <input /><br />

            <label>Email:</label> <br />
            <input /><br />

            <label>Password:</label> <br />
            <input /><br />

            <label>Confirm Password:</label> <br />
            <input /><br />

            <input type='submit' value='Register' />
        </form>
    )
}

export default RegisterPage;