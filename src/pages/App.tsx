import {useState} from "react";
import Cronometro from "../components/cron";
import Form from "../components/form";
import List from "../components/list";
import { ITask } from "../types/ITask";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Cronometro/>
    </div>
  );
}

export default App;
