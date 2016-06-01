import React from 'react';
import {render} from 'react-dom';

var App = React.createClass({
	render: function() {
		return <div>Oh shit! Whatupp!</div>;
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);