import { ITask } from "../../../types/ITask";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  name,
  tempo,
  selecionado,
  completado,
  id,
  selectTask,
}: Props) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selectTask({
          name,
          completado,
          id,
          selecionado,
          tempo,
        })
      }
    >
      <h3>{name}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="Tarefa concluída"></span>
      )}
    </li>
  );
}
