import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return; // Fix: Added a return statement to prevent form submission

    console.log(value, category);
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className='todo-form'>
      <h2>Criar nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite o título'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar</button>
      </form>
    </div>
  );
};

export default TodoForm;
