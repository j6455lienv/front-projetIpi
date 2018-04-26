import React, { Component, Fragment } from 'react';
import { Header, Footer, Accueil } from './Layouts'

export default class extends Component {
	render() {
		return <Fragment>
			<Header />
			<Accueil />
			<Footer />
		</Fragment>
	}
}

