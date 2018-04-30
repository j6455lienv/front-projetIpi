import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import CreateDialog from '../Exercices/Dialogs/Create'

export default props =>
	<AppBar position="static">
		<Toolbar>
			<Typography variant="headline" color="inherit" style={{flex: 1}}>
				Exercice Database
			</Typography>

			<CreateDialog />

		</Toolbar>
	</AppBar>