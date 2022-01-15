import { FaSpinner } from "react-icons/fa"
import styles from "./Spiner.module.css"
export function Spiner() {
  return (
    <div className={styles.spiner}>
      <div><FaSpinner size={60}  /></div>
    </div>
  )
}
