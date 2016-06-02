import React from 'react';
import {Link, IndexLink} from 'react-router';

class Main extends React.Component{
	render () {
		return (
			<div>
				<div>
				  <Link to="/login">Log in</Link>
				</div>

				{this.props.children}
			</div>
		);
	}
}

export default Main;