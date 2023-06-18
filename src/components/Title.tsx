import { FC } from "react";
import { FaHandPeace } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "../scss/Title.module.scss";

const Title: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Привет <FaHandPeace />, я
        </h1>
        <h1 className={styles.title}>
          <b className={styles.bold}>Руслан</b> Латыпов
        </h1>
        <p className={styles.aboutMeFirst}>Это мой личный сайт-портфолио</p>
        <p className={styles.aboutMeContent}>
          Я вэб-разработчик/программист. Открытый, быстрообучаемый и увлеченный
          своей работой.
        </p>
        <Link to="/works" className={styles.myProjectsBtn}>
          <span className={styles.btnContent}>мои проекты</span>
        </Link>
      </div>
      <div className={styles.photo}></div>
    </div>
  );
};
export default Title;
