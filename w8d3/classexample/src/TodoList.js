import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({todos, deleteTodo, checkTask}) => {
  
  const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} checkTask={checkTask}/>)
  
  return (
    <ul className="list-group">
      
    {todoList}
          
    </ul>
  )
}

export default TodoList
