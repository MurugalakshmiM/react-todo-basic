import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { addTodo, editTodo } from './action/todoAction'
import { connect } from 'react-redux'

function App (props) {
  const [todoElement, setTodoElement] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [index, setIndex] = useState()

  const addOrEditTodoElement = event => {
    event.preventDefault()
    if (isEdit) {
      let editElement = {
        index: index,
        value: todoElement
      }
      props.editTodo(editElement)
      setTodoElement('')
      setIsEdit(false)
    } else {
      props.addTodo(todoElement)
    }
  }

  const editTodoElement = (event, index) => {
    event.preventDefault()
    setIsEdit(true)
    setIndex(index)
    setTodoElement(props.todoState[index])
  }

  return (
    <>
      <input
        type='text'
        value={todoElement}
        onChange={e => setTodoElement(e.target.value)}
      />
      <button onClick={e => addOrEditTodoElement(e)}>
        {isEdit ? 'edit' : 'submit'}
      </button>
      {props.todoState.length > 0 &&
        props.todoState.map((element, index) => (
          <>
            <li key={index.toString()}>
              {element}
              <button onClick={e => editTodoElement(e, index)}>Edit</button>
            </li>
          </>
        ))}
    </>
  )
}

const mapStateToProps = state => ({
  todoState: state
})

const mapDispatchToProps = dispatch => ({
  addTodo: todoElement => dispatch(addTodo(todoElement)),
  editTodo: editElement => dispatch(editTodo(editElement))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
