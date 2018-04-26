import React from 'react';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const Header = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<AppBar
			title="Title"
			iconElementLeft={<IconButton><NavigationClose /></IconButton>}
		/>
	</MuiThemeProvider>
);

export default Header;