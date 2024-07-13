import styles from "./Banner.module.css"
import banner from './banner.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="foto banner principal" />
    </div>
  )
}

export default Banner