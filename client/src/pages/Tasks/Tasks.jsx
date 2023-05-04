import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { createTask, updateTask, deleteTask } from '../../helpers/api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Aqui vamos buscar as tarefas existentes na API e atualizar o estado com elas
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aqui vamos criar uma nova tarefa e atualizar o estado com ela
    const newTask = await createTask(title, description);
    setTasks([...tasks, newTask]);

    // Limpa o formulário após criar uma nova tarefa
    setTitle('');
    setDescription('');
  };

  const handleEdit = async (id, newTitle, newDescription) => {
    // Aqui vamos atualizar uma tarefa existente e atualizar o estado com ela
    const updatedTask = await updateTask(id, newTitle, newDescription);
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );
    setTasks(updatedTasks);
  };

  const handleDelete = async (id) => {
    // Aqui vamos excluir uma tarefa existente e atualizar o estado sem ela
    await deleteTask(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button
              onClick={() =>
                handleEdit(task.id, 'New Title', 'New Description')
              }
            >
              Edit
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
