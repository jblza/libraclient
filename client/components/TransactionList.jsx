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
	}

	getData() {
		$.ajax({
		    type: "GET",
		    dataType: 'json',
		    url: 'https://api.libratax.com/v1/account/transactions',
		    data: {
		        token: Auth.getToken(),
		    },
		    success: function(data) {
		        this.setState({transactions: data.transactions});
		        //console.log(this.state.transactions);
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
				<h3>Date   Amount   Asset   Value   Type</h3>
				<List data={this.state.transactions}/>
			</div>
		);
	}
}

export default TransactionList;