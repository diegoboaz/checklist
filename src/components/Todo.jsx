import React from 'react';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const { text, category, isCompleted} = todo;

  return (
    <div className='todo' style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <div className='content'>
        <p>{text}</p>
        <p className='category'>{category}</p>
        <div>
          <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
