import styles from './GrayButton.module.scss'
export const GrayButton = ({text, onClick, type = 'button'}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>{text}</button>
  )
}

