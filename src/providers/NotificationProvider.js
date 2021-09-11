import { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { ToastNotification } from 'carbon-components-react'

import NotificationContext from '../contexts/NotificationContext';

class NotificationProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			success: false,
			hideCloseButton: true,
			lowContrast: false,
			timeout: 3000,
			kind: 'error',
			subtitle: '',
			caption: '',
			statusIconDescription: '',
			style: {},
			className: '',
			onCloseButtonClick: () => {}
		};
	}

	showNotification = (notification) => {
		const {
			error,
			success,
			kind,
			subtitle,
			caption,
			statusIconDescription,
			style,
			className,
			timeout,
			hideCloseButton,
			lowContrast,
			onCloseButtonClick
		} = notification;

		this.setState({
			error: error === undefined ? this.state.error : error,
			success: success === undefined ? this.state.success : success,
			hideCloseButton: hideCloseButton === undefined ? this.state.hideCloseButton : hideCloseButton,
			lowContrast: lowContrast === undefined ? this.state.lowContrast : lowContrast,
			timeout: timeout === undefined ? this.state.timeout : timeout,
			kind: kind === undefined ? this.state.kind : kind,
			subtitle: subtitle === undefined ? this.state.subtitle : subtitle,
			caption: caption === undefined ? this.state.caption : caption,
			statusIconDescription: statusIconDescription === undefined ? this.state.statusIconDescription : statusIconDescription,
			style: style === undefined ? this.state.style : style,
			className: className === undefined ? this.state.className : className,
			onCloseButtonClick: onCloseButtonClick === undefined ? this.state.onCloseButtonClick : onCloseButtonClick,
		});
	}

	render() {
		const {
			error,
			success,
			kind,
			subtitle,
			caption,
			statusIconDescription,
			timeout,
			style,
			className,
			hideCloseButton,
			lowContrast,
			onCloseButtonClick
		} = this.state;

		const { children } = this.props;

		let title = '';

		if (kind === 'warning' || kind === 'warning-alt') {
			title = 'Warning';
		} else if (kind === 'success') {
			title = 'Success';
		} else if (kind === 'error') {
			title = 'Error';
		} else if (kind === 'info' || kind === 'info-square') {
			title = 'Info';
		}

		return (
			<NotificationContext.Provider
				value={{
					...this.state,
					showNotification: this.showNotification
				}}
			>
				<>
					{
						(error || success) && (
							ReactDOM.createPortal(
								<ToastNotification
									kind={kind}
									title={title}
									subtitle={subtitle}
									caption={caption}
									statusIconDescription={statusIconDescription}
									hideCloseButton={hideCloseButton}
									lowContrast={lowContrast}
									timeout={timeout}
									style={{
										...style
									}}
									className={`${className} notification`}
									onCloseButtonClick={onCloseButtonClick}
								/>,
								document.body
							)
						)
					}
				</>
				{children}
			</NotificationContext.Provider>
		)
	}
}

export default NotificationProvider;
