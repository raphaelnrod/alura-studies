import React from "react";
import Button from "../buttons";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="task">Adicionar um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que voce quer estudar?"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step={1}
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
