import styles from './RedButton.module.scss'
export const RedButton = ({text, secondClass, type, onClick}) => {
  return (
    <button onClick={onClick}   type={type} className={`${styles.button} ${secondClass}`}>{text}</button>
  )
}