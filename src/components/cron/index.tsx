import { useEffect, useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../buttons";
import { timeToSeconds } from "../utils/DateUtils";
import Relogio from "./clock";
import style from "./cron.module.scss";
import showToast from "../toast/toast";

interface Props {
  selecionado: ITask | undefined;
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTime] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) setTime(timeToSeconds(selecionado?.tempo));
  }, [selecionado]);

  function contagemRegressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        return contagemRegressiva(contador - 1);
      }
      showToast("Tarefa concluída!", 'success');
      finalizarTarefa();
      return;
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}></Relogio>
      </div>
      <Button onClick={() => contagemRegressiva(tempo)}>Começar!</Button>
    </div>
  );
}
