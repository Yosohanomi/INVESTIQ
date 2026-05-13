import styles from './GrayButton.module.scss'
export const GrayButton = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

