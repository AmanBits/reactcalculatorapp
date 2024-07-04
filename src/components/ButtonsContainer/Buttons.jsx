import styles from '../../assets/css/ButtonsContainer/buttons.module.css';
const Buttons = ({onClickButton}) => {
  const buttonslist = [
    "C",
    "%",
    "x",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      {buttonslist.map((item) => {
        return <button className={styles.button} onClick={()=>onClickButton(item)} >{item}</button>;
      })}
    </>
  );
};

export default Buttons;
