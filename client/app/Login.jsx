
var Login = React.createClass({

	render: function(){
		return (
			<form> 
				<input type='email' placeholder='Email address' />
				<input type='password' placeholder='Password' />
				<input type='submit' value='Log in' />
			</form>
		);
	}
});

export default Login;