import { FC } from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

import styles from "../scss/Contacts.module.scss";
import Header from "../components/Header";

const Contacts: FC = () => {
  return (
    <>
      <Header colorFont="#ff8c78" />
      <div className={styles.container}>
        <div className={styles.paralax}></div>
        <div className={styles.contactsInfo}>
          <h1 className={styles.title}>Давайте общаться!</h1>
          <p className={styles.content}>
            Давайте спишемся и посмотрим, какой интересный проект у нас
            получится. Напишите мне по электронной почте или свяжитесь со мной
            через мои социальные сети, вы всегда можете написать мне "ПРИВЕТ" !!
          </p>
          <div className={styles.icons}>
            <a className={styles.icon} href="https://github.com/Trilshane">
              <FaGithub />
            </a>
            <a
              className={styles.icon}
              href="https://www.instagram.com/trilshane/"
            >
              <FaInstagram />
            </a>
            <a className={styles.icon} href="https://t.me/trilshane">
              <FaTelegram />
            </a>
          </div>
          <a className={styles.mailBtn} href="mailto:Trilshane@yandex.ru">
            Электронная почта
          </a>
        </div>
      </div>
    </>
  );
};
export default Contacts;
