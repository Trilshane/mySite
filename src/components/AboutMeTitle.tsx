import { FC } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

import resume from "../objects/Resume.pdf";

import styles from "../scss/AboutMeTitle.module.scss";

const AboutMeTitle: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paralax}>
        <div className={styles.paralaxBg}></div>
      </div>
      <div className={styles.aboutMeInfo}>
        <h1 className={styles.title}>Всем привет</h1>
        <div className={styles.line}></div>
        <p className={styles.content}>
          Меня зовут Руслан Латыпов. Я програмист-самоучка.💻 В основном я
          занимаюсь веб-разработкой. У меня также есть скромный опыт разработки
          Windows-приложений на C#, небольших игр на Unity и решения простых
          задач на Python. Увлекаюсь видеоиграми и изучением новых технологий.
        </p>
        <a href={resume} target="_blank" className={styles.resume}>
          <HiOutlineDocumentText className={styles.resumeIcon} />
          Мое резюме
        </a>
      </div>
    </div>
  );
};
export default AboutMeTitle;
