import style from './Relogio.module.css';

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const minutosString = String(minutos).padStart(2, '0');
  const segundosString = String(segundos).padStart(2, '0');
  const minutoDezena = minutosString[0];
  const minutoUnidade = minutosString[1];
  const segundoDezena = segundosString[0];
  const segundoUnidade = segundosString[1];
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
