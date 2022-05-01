import React from 'react';

function Pagination({ todosPerPage, totalTodos, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li>
              <a onCLick="{() => paginate(number)}" href="#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
