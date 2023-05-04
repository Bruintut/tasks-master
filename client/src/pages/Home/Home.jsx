import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks } from '../../helpers/api';

import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks">Tarefas</Link>
          </li>
        </ul>
      </nav>
      <div className="tasks-container">
        <h2>Tarefas</h2>
        <div>
          <h1>Minhas tarefas</h1>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title} - {task.completed ? 'Concluído' : 'Não concluído'}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="actions-container">
        <button>Adicionar tarefa</button>
        <button>Editar tarefa</button>
        <button>Deletar tarefa</button>
      </div>
    </div>
  );
}

export default Home;
