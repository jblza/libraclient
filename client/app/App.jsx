
import Login from './Login.jsx';

var App = React.createClass({
	render: function() {
		return <Login />;
	}
});

ReactDOM.render(<App />, document.getElementById('app'));