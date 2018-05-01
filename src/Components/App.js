import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts'
import Exercices from './Exercices'
import {muscles, exercises} from '../store.js'

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initExercises)

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise

      exercises[muscles] = [
        ...exercises[muscles],
        exercise
      ]

      return exercises
    }, initExercises))
  }

  handleCategorySelected = category => this.setState({category})

  handleExercisesSelected = id => this.setState(({exercises}) => ({
    exercise: exercises.find(ex => ex.id === id)
  }))

  handleExerciseCreate = exercise => this.setState(({exercises}) => ({
    exercises: [
      ...exercises,
      exercise
    ]
  }))

  handleExerciseDelete = id => this.setState(({exercises}) => ({
    exercises: exercises.filter(ex => ex.id !== id)
  }))

  handleExerciseSelectEdit = id => this.setState(({exercises}) => ({
    exercise: exercises.find(ex => ex.id === id),
    editMode: true
  }))

  handleExerciseEdit = exercise => 
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercises.id),
        exercise
      ]
    }))

  render() {
    const exercises = this.getExercisesByMuscles(), {category, exercise, editMode} = this.state

    return <Fragment>
      <Header muscles={muscles} onExerciseCreate={this.handleExerciseCreate}/>

      <Exercices
        exercise={exercise}
        category={category}
        exercises={exercises}
        editMode={editMode}
        muscles={muscles}
        onSelect={this.handleExercisesSelected}
        onDelete={this.handleExerciseDelete}
        onSelectEdit={this.handleExerciseSelectEdit}
        onEdit={this.handleExerciseEdit}/>

      <Footer
        category={category}
        muscles={muscles}
        onSelect={this.handleCategorySelected}/>
    </Fragment>
  }
}