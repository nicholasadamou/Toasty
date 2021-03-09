import { lazy, Suspense } from 'react';

import {Route, Switch} from 'react-router-dom';

import Loading from './components/Loading/Loading';

const IndexPage = lazy(() => import('./routes/index'));

const Routes = () => {
	return (
		<Suspense fallback={<Loading/>}>
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => {
						return <IndexPage {...props} />;
					}}
				/>
			</Switch>
		</Suspense>
	);
};

export default Routes;
