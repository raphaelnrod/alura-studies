import React from "react";

function List() {
  const tasks = [
    { name: "React", tempo: "02:00:00" },
    { name: "Javascript", tempo: "01:00:00" },
    { name: "Typescript", tempo: "01:20:00" },
    { name: "Testes", tempo: "00:30:00" },
  ];

  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li>
            <h3>{task.name}</h3>
            <span>{task.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
