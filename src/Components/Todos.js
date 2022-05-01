import React from 'react';

function Todos({ todos, loading }) {
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      {todos.map((item) => {
        return (
          <div>
            <div>
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
              <h1></h1>
              <p></p>
              <h1></h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
