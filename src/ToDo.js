import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './Components/Todos';
import Pagination from './Components/Pagination';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoadng] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoadng(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
      setLoadng(false);
    };

    fetchTodos();
    console.log(todos);
  }, []);

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (num) => {
    setCurrentPage(num);
    console.log(num);
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <nav>
          <ul className="ultypes">
            <li className="listTypes">
              <a href="/ToDo" className="atypes">
                Todo
              </a>
            </li>
            <li className="listTypes">
              <a href="/" className="atypes">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Todos todos={currentTodos} loading={loading} />
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ToDo;
