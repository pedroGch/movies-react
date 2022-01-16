import { FaSpinner } from "react-icons/fa"
import styles from "./Spiner.module.css"
export function Spiner() {
  return (
    <div className={styles.spiner}>
      <div className={styles.spining}><FaSpinner size={60}  /></div>
    </div>
  )
}
