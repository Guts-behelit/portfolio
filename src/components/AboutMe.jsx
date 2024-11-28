
import styles from "../style/aboutme.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutMeContainer}>
      <p className={styles.description}>
        Soy un desarrollador frontend autodidacta con una profunda pasión por la tecnología y el aprendizaje continuo. Destaco en la creación de aplicaciones eficientes y funcionales utilizando tecnologías como <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>NodeJS</strong>, y <strong>Python</strong>, enfocándome en la calidad del código y la experiencia del usuario.
     <br />
     Mi interés en el impacto de la tecnología me lleva a explorar soluciones innovadoras como la <strong>agricultura inteligente</strong> mediante análisis de datos y la <strong>automatización de procesos</strong>, siempre buscando mejorar la productividad.
      </p>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
        <h3 className={styles.subtitle}>Habilidades Técnicas</h3>
      <ul className={styles.list}>
        <li>Desarrollo de interfaces modernas y optimizadas.</li>
        <li>Diseño responsivo y accesible.</li>
        <li>Implementación de APIs y automatización con NodeJS.</li>
        <li>Gestión de datos y desarrollo de herramientas inteligentes.</li>
      </ul>
        </div>
        <div className={styles.softSkillsContainer}>
        <h3 className={styles.subtitle}>Habilidades Blandas</h3>
      <ul className={styles.list}>
        <li><strong>Trabajo en equipo:</strong> Colaboro de manera efectiva, aportando ideas y adaptándome a diferentes enfoques.</li>
        <li><strong>Resolución de problemas:</strong> Abordo desafíos con creatividad y pensamiento crítico.</li>
        <li><strong>Adaptabilidad:</strong> Me adapto rápidamente a nuevas tecnologías y metodologías.</li>
      </ul>
        </div>
      </div>
      <p className={styles.description}>
        Mi objetivo es formar parte de un equipo que valore la innovación, la mejora continua y el impacto positivo de la tecnología. Estoy listo para aportar mis habilidades y seguir creciendo en proyectos desafiantes.
      </p>
    </section>
  );
};

export default AboutMe;
