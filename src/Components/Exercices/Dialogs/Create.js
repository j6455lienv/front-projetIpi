import React, { Component, Fragment } from 'react'
import { Dialog, Button, TextField, Select } from 'material-ui'
import {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog'
import { Add } from 'material-ui-icons'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	FormControl: {
		width: 500
	}
})
export default withStyles(styles)(class extends Component {
	state = {
		open: false,
		exercise: {
			title: '',
			description: '',
			muscles: ''
		}
	}

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		})
	}

	handleChange = name => ({ target: { value } }) => {
		this.setState({
			exercise: {
				...this.state.exercise,
				[name]: value
			}
		})
	}

	handleSubmit = () => {
		const { exercise } = this.state

		this.props.onCreate({
			...exercise,
			id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
		})

		this.setState({
			open: false,
			exercise: {
				title: '',
				description: '',
				muscles: ''
			}
		})
	}

	render() {
		const { open, exercise: { title, description, muscles } } = this.state,
			{ classes, muscles: categories } = this.props

		return <Fragment>

			<Button variant="fab" color="inherit" onClick={this.handleToggle} mini>
				<Add />
			</Button>

			<Dialog
				open={this.state.open}
				onClose={this.handleToggle}
			>
				<DialogTitle id="form-dialog-title">
					Create a new Exercice
			</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please fill out the form below.
      		</DialogContentText>

					<form>
						<TextField
							label="Title"
							value={title}
							onChange={this.handleChange('title')}
							margin="normal"
							className={classes.FormControl}
						/>
						<br />
						<FormControl className={classes.FormControl}>
							<InputLabel htmlFor="muscles">
								Muscles
							</InputLabel>
							<Select
								value={muscles}
								onChange={this.handleChange('muscles')}
							>
								{categories.map(category =>
									<MenuItem key={category} value={category}>
										{category}
									</MenuItem>
								)}

							</Select>
						</FormControl>
						<br />
						<TextField
							multiLine
							row="4"
							label="Description"
							value={description}
							onChange={this.handleChange('description')}
							margin="normal"
							className={classes.FormControl}
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button
						color="primary"
						variant="raised"
						onClick={this.handleSubmit}
					>
						Create
        </Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	}
})