import React, { useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../buttons";
import style from "./Form.module.scss";
import showToast from "../toast/toast";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  tasks: ITask[];
}

function Form({ setTasks, tasks }: Props) {
  const [name, setTask] = useState("");
  const [tempo, setTime] = useState("00:00");

  function addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    verifyDuplicatedTask(name);
    setTasks((tarefasAntigas) => [
      ...tarefasAntigas,
      { name, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    resetStateForm();
  }

  function resetStateForm() {
    setTask("");
    setTime("00:00");
  }

  function verifyDuplicatedTask(taskName: string) {
    if (tasks.find((task) => task.name === taskName)) {
      showToast("Esta tarefa já existe!", "error", {
        position: "top-center",
      });
      throw new Error("Duplicated task");
    }
  }

  return (
    <form onSubmit={addTask.bind(Form)} className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicionar um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={name}
          onChange={(evento) => setTask(evento.target.value)}
          placeholder="O que voce quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step={1}
          name="time"
          value={tempo}
          onChange={(evento) => setTime(evento.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
