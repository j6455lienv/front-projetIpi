import React, {Fragment} from 'react'
import {Grid, Paper, Typography, List, IconButton} from '@material-ui/core'
import {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List'
import { Edit, DeleteForever } from '@material-ui/icons'
import { withStyles } from 'material-ui/styles'
import Form from './Form'

const styles = theme => ({
  Paper: {
    padding: 20,
    marginTop: 5,
    height: 500,
    overflowY: 'auto'
  }
})

export default withStyles(styles) (
  ({
    classes,
    muscles,
    exercises,
    exercise,
    category,
    onSelect,
    editMode,
    onSelectEdit,
    exercise: {
      id,
      title = 'Welcome : ',
      description = 'Please select an exercise from the list on the left'
    },
    onDelete,
    onEdit
  }) => <Grid container>
    <Grid item lg={4} sm={6} xs={12}>
      <Paper className={classes.Paper}>
        {exercises.map(([group, exercises]) => !category || category === group
          ? <Fragment key={group}>
              <Typography
                variant="headline"
                style={{
                textTransform: 'capitalize'
              }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({id, title}) => <ListItem key={id} button onClick={() => onSelect(id)}>
                  <ListItemText primary={title}/>
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => onSelectEdit(id)}>
                      <Edit/>
                    </IconButton>
                    <IconButton onClick={() => onDelete(id)}>
                      <DeleteForever/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)}
              </List>
            </Fragment>
          : null)}
      </Paper>
    </Grid>
    <Grid item lg={8} sm={6} xs={12}>
      <Paper className={classes.Paper}>
        {editMode
          ? <Form exercise={exercise} muscles={muscles} onSubmit={onEdit}/>
          : <Fragment>
            <Typography variant="display1">
              {title}
            </Typography>
            <Typography
              variant="subheading"
              style={{
              marginTop: 20
            }}>
              {description}
            </Typography>
          </Fragment>
  }
      </Paper>
    </Grid>
  </Grid>
)