import {Link} from 'react-router';
import React from 'react';

class Login extends React.Component {

	processForm(event){
		event.preventDefault();
		console.log("email:", this.refs.email.getValue());
    	console.log("password:", this.refs.password.getValue());
	}

	render () {
		return (
			<form action="/" onSubmit={this.processForm.bind(this)}> 
				<input type='email' ref='email' placeholder='Email address' />
				<input type='password' ref='password' placeholder='Password' />
				<input type='submit' value='Log in' />
			</form>
		);
	}
}

export default Login;