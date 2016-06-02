import App from './App.jsx';
import Main from './Main.jsx';
import Login from './Login.jsx';
import TransactionList from './TransactionList.jsx';
import Auth from './Auth.js';

const routes = {

	component: Main,
	childRoutes: [
		{
			path: '/',
			getComponent: (location, callback) => {
				if (Auth.isUserAuthenticated()) {
					callback(null, TransactionList);
				} else {
					callback(null, Login);
				}
			}
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/logout',
			onEnter: (nextState, replaceState) => {
				Auth.deauthenticateUser();
				clearInterval(window.transId);
				replaceState(null, '/');
			}
		}
	]
};

export default routes;
