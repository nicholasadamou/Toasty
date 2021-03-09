import {BrowserRouter as Router} from 'react-router-dom';

import './App.scss';

import NotificationProvider from './providers/NotificationProvider';

import Routes from './Routes';

const App = () => (
	<NotificationProvider>
		<Router>
			<Routes />
		</Router>
	</NotificationProvider>
)

export default App;


