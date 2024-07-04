import styles from '../../assets/css/ButtonsContainer/buttonscontainer.module.css';
const ButtonsContainer = ({children}) => {
  return <div className={styles.buttonsContainer}>{children}</div>;
};

export default ButtonsContainer;
