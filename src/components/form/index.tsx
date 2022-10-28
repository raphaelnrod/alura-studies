import React from "react";
import { ITask } from "../../types/ITask";
import Button from "../buttons";
import style from "./Form.module.scss";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    name: "",
    tempo: "00:00",
  };

  addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTasks(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.addTask.bind(this)} className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicionar um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.name}
            onChange={(evento) =>
              this.setState({ ...this.state, name: evento.target.value })
            }
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
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
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
}

export default Form;
