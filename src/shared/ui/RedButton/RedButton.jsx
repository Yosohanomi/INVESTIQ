import styles from './RedButton.module.scss'
export const RedButton = ({text, secondClass}) => {
  return (
    <button className={`${styles.button} ${secondClass}`}>{text}</button>
  )
}