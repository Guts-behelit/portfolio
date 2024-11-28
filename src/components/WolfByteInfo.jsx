import styles from '../style/wolfbyteinfo.module.css'

export default function WolfByteInfo() {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Wolfbyte</h1>
          <p className={styles.description}>
            Este proyecto es un Browser construido con <strong>ElectronJS</strong>. Permite a los usuarios buscar, ver y
            controlar e ingresar a sus sitios web favoritos directamente desde la interfaz de la aplicación. Tiene como
            buscador predeterminado <strong>DuckDuckGo</strong> para proporcionar una experiencia fluida y moderna sin
            rastreadores de anuncios.
          </p>
          <div className={styles.imageWrapper}>
            <img
              src="./img/browser-google.png"
              alt="YouTube Player"
              className={styles.image}
            />
          </div>
         
          <h2 className={styles.subtitle}>Preview del proyecto</h2>
          <div className={styles.imageWrapper}>
            <img
              src="./img/screen-capture (2).gif"
              alt="Texto alternativo"
              className={styles.image}
            />
          </div>
          <h2 className={styles.subtitle}>Características</h2>
          <ul className={styles.features}>
            <li>Búsqueda de contenido sin restricciones.</li>
            <li>Diseño intuitivo y responsivo.</li>
            <li>Soporte para la reproducción en pantalla completa.</li>
          </ul>
        </div>
      );
}
