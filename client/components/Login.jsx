import {Link} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth.js';

class Login extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			errorMessage: '',
			errors: {},
			email: '',
			password: ''
		};

		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.processForm = this.processForm.bind(this);
	}

	processForm(event){
		event.preventDefault();
		let self = this;
		let history = this.props.history;

		//console.log("email:", this.state.email);
    	//console.log("password:", this.state.password);
    	$.ajax({
		    type: "POST",
		    dataType: 'json',
		    url: 'https://api.libratax.com/v1/auth/authenticate',
		    data: {
		        email: this.state.email,
		        password: this.state.password
		    },
		    success: function(data) {
		        console.log(data);
		        Auth.authenticateUser(data.token);
		        history.replaceState(null, '/');
		    }.bind(this),
		    error: function(xhr, status, err) {
		        console.error( status, err.toString());
		    }.bind(this)
		});

		this.setState({email: ''});
		this.setState({password: ''});

    	return;
	}
	/*update(e){
		this.setState({
			email: ReactDOM.findDOMNode(this.refs.email).value,
			password: ReactDOM.findDOMNode(this.refs.password).value
		})
	}*/
	onEmailChange(e){
		this.setState({email: e.target.value});
	}
	onPasswordChange(e){
		this.setState({password: e.target.value});
	}

	render () {
		return (
			<form action="/" onSubmit={this.processForm}> 
				<input type='email' value={this.state.email} onChange={this.onEmailChange} placeholder='Email address' />
				<input type='password' value={this.state.password} onChange={this.onPasswordChange} placeholder='Password' />
				<input type='submit' value='Log in' />
			</form>
		);
	}
}

export default Login;