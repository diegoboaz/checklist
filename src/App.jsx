import { useState } from 'react';
import '../src/App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { 
      id: 1, 
      text: "Criar funcionalidade X do sistema",
      category: "(Trabalho)",
      isCompleted: false,
    },
    { 
      id: 2, 
      text: "Atividades Pessoais",
      category: "(Pessoal)",
      isCompleted: false,
    },
    { 
      id: 3, 
      text: "Estudos",
      category: "(Estudos)",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
