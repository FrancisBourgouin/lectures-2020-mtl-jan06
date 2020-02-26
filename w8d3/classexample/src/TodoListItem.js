import React from 'react'

import './TodoListItem.scss'

const TodoListItem = (({id, task, completed, deleteTodo, checkTask}) => {


  return (
    <li style={completed ? {textDecoration: 'line-through'}:null} className="list-group-item new-todo"><input type="checkbox" value={task} onClick={()=> checkTask(id)} checked={completed ? completed : undefined}/> <label>{task}</label> <button onClick={event => deleteTodo(id)} className='remove-todo'>X</button></li>
  )
})

export default TodoListItem
