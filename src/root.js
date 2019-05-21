import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App.js';

class Root extends Component {
	render() {
		return(
			<BrowserRouter>
				<Route component={App} />
			</BrowserRouter>
		);
	}
}

export default Root;