import React, { Component, Fragment } from 'react';
import App from './App.css';
import { Header, Footer, Accueil } from './Layouts'

export default class extends Component {
	render() {
		return <Fragment>
			<div class="title">
				<h1>NutriMeal</h1>
				<p>L'application de gestion des nutriments alimentaires</p>
			</div>
			<Header />
			<Accueil />
			<Footer />
		</Fragment>
	}
}

