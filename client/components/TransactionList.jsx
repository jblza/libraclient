import React from 'react';
import Auth from './Auth.js';
import {Link} from 'react-router';
import List from './List.jsx';

class TransactionList extends React.Component{

	constructor() {
		super();

		this.state = {
			transactions: [],
		};
	}

	componentDidMount() {
		this.getData();
		window.transId = setInterval(this.getData.bind(this), 5000);
	}

	getData() {
		$.ajax({
		    type: "GET",
		    dataType: 'json',
		    url: 'https://api.libratax.com/v1/account/transactions',
		    data: {
		        token: Auth.getToken(),
		        page: "1",
		        per_page: "50"
		    },
		    success: function(data) {
		        this.setState({transactions: data.transactions});
		        console.log("updated transactions");
		    }.bind(this),
		    error: function(xhr, status, err) {
		        console.error(status, err.toString());
		    }.bind(this)
		});
	}

	render () {
		return (
			<div>
				<h1>Transactions</h1>
				<h3>Date  --  Destination  --  Amount  --  Asset  --  Value  --  Type</h3>
				<List data={this.state.transactions}/>
			</div>
		);
	}
}

export default TransactionList;