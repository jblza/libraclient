import App from './App.jsx';
import Main from './Main.jsx';
import Login from './Login.jsx';
import TransactionList from './TransactionList.jsx';

const routes = {

	component: Main,
	childRoutes: [
		{
			path: '/',
			component: TransactionList
		},
		{
			path: '/login',
			component: Login
		}
	]
};

export default routes;
