import styles from './RedButton.module.scss'
export const RedButton = ({text, secondClass, type}) => {
  return (
    <button type={type} className={`${styles.button} ${secondClass}`}>{text}</button>
  )
}