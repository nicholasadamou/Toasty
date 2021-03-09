import { useContext, useEffect } from 'react';

import { withRouter }  from 'react-router-dom';

import NotificationContext from '../contexts/NotificationContext';

const IndexPage = () => {
	const { showNotification } = useContext(NotificationContext);

	const notification = {
		success: true,
		kind: 'success',
		subtitle: 'Test success notification',
		timeout: 5000
	};

	useEffect(() => {
		showNotification(notification);
	});

	return (
		<>

		</>
	)
}

export default withRouter(IndexPage);
