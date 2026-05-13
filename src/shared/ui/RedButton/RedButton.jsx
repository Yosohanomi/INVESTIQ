import styles from './RedButton.module.scss'
export const RedButton = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}