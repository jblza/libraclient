import React from 'react';
import {Link, IndexLink} from 'react-router';
import Auth from './Auth.js';

class Main extends React.Component{
	render () {
		return (
			<div>
				{Auth.isUserAuthenticated() ? (
					<div>
						<Link to='/logout'>Log out</Link>
					</div>
				) : (
					<div>
						<Link to='/login'>Log in</Link>
					</div>
				)}

				{this.props.children}
			</div>
		);
	}
}

export default Main;