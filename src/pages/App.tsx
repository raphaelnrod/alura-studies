import { useState } from "react";
import Cronometro from "../components/cron";
import Form from "../components/form";
import List from "../components/list";
import { ITask } from "../types/ITask";
import style from "./App.module.scss";
import { ToastContainer } from "react-toastify";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelecionado(selectedTask);
    setTasks((tarefasAnteriores) =>
      tarefasAnteriores.map((task) => ({ ...task, selecionado: task.id === selectedTask.id }))
    );
  }

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined);
      setTasks(tarefasAnteriores => tarefasAnteriores.map(task => {
        if(task.id === selecionado.id){
          return {
            ...task,
            selecionado: false,
            completado: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} tasks={tasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
      <ToastContainer />
    </div>
  );
}

export default App;
