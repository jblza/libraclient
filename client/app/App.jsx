import {Link, IndexLink} from 'react-router';
import Login from './Login.jsx';

var App = React.createClass({
	render: function() {
		{Auth.isUserAuthenticated() ? (
			<div>List of SHit</div>
		) : (
			<Login />
		)}
	}
});

ReactDOM.render(<App />, document.getElementById('app'));