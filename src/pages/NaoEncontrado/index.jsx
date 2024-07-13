import styles from './NaoEncontrado.module.css'
import notFoundImg from './undraw_Page_not_found_re_e9o6.png'

const NaoEncontrado = () => {
  return (
    <img className={styles.img} src={notFoundImg} alt='Imagem de página não encontrada'/>
  )
}

export default NaoEncontrado