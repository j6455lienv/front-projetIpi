import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
	state = {
		selectedIndex: 0,
	};

	select = (index) => this.setState({ selectedIndex: index });

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<Paper zDepth={1}>
					<BottomNavigation selectedIndex={this.state.selectedIndex}>
						<BottomNavigationItem
							label="Recents"
							icon={recentsIcon}
							onClick={() => this.select(0)}
						/>
						<BottomNavigationItem
							label="Favorites"
							icon={favoritesIcon}
							onClick={() => this.select(1)}
						/>
						<BottomNavigationItem
							label="Nearby"
							icon={nearbyIcon}
							onClick={() => this.select(2)}
						/>
					</BottomNavigation>
				</Paper>
			</MuiThemeProvider>
		);
	}
}

export default Footer;