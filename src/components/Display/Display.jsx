import style from '../../assets/css/Display/display.module.css';
const Display = ({textView}) => {
  return (
    <div className={style.displayContainer} >
      <input className={style.display} type="text" value={textView} />
    </div>
  );
};

export default Display;
