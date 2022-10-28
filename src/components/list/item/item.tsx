import style from '../List.module.scss';

export default function Item({name, tempo}: { name: string; tempo: string }) {

  return (
    <li className={style.item}>
      <h3>{name}</h3>
      <span>{tempo}</span>
    </li>
  );
}
