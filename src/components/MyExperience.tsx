import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "../scss/MyExperience.module.scss";

type MyExperienceType = {
  contentBtn: string;
  btnPath: string;
  bg: string;
};

const MyExperience: FC<MyExperienceType> = ({ contentBtn, btnPath, bg }) => {
  const myExpArray: {
    title: string;
    content: string;
  }[] = [
    {
      title: "HTML/CSS",
      content:
        "Изучал HTML и CSS по книгам: 'Изучаем HTML, XHTML и CSS (Head First)' Элизабет Робсон, Эрик Фримен, 'Наглядный CSS' Грег Сидельников, 'CSS для профи' Кит Грант. Во время обучения сделал несколько сайтов на ванильном HTML. Имею опыт работы с предпроцессорамии, такими как SCSS/SASS и LESS. Так же имею опыт написания кода с помощью CSS фреймворка Tailwind. Верстаю адаптивно и кроссбраузерно. Знаком с методолгией БЭМ и CSS модулями.",
    },
    {
      title: "JavaScript",
      content:
        "Изучал JavaScript по книгам: 'Изучаем программирование на JavaScript' Элизабет Робсон, Эрик Фримен, 'JavaScript с нуля' Чиннатхамби Кирупа. Так же проходил обучение на сайте Learn.javascript.ru и прошел полный курс JavaScript на Udemy от Богдана Сташчука, решал задачи на CodeWars. Активно использую JavaScript(ES6) в работе. Знаю принципы ООП и функционального програмирования. Делал проекты с бэкендом - получал данные с помощью fetch или axios. Изучал библиотеку React. Так же касался фрейворка Vue.js. Так же имею опыт со стейт менеджерами, такими как Redux и Redux Toolkit.",
    },
    {
      title: "React",
      content:
        "Изучал библиотеку React с помощью документации на сайте Reactjs.org, а так же прошел курс на Udemy от Богдана Сташчука. Умею писать как с помощью классовых, так и с помощью функциальных компонентов и хуков. Знаю React Router, React Context, а так же множество других библиотек для облегчения работы. ",
    },
    {
      title: "TypeScript",
      content:
        "С недванего времени начал изучать TypeScript. Все свои новые проекты стараюсь писать на React+TypeScript.",
    },
    {
      title: "C#/Python",
      content:
        "Недолгое время изучал С# с репетитором, могу решать простые задачи. Немного знаком с движком Unity. На Python решал задачи на CodeWars.",
    },
    {
      title: "Другое",
      content:
        "Менеджеры пакетов: npm, pnpm, yarn. Сборщики: Webpack, Vite. Система контроля версий: git. ",
    },
  ];
  return (
    <div style={{ backgroundColor: bg }} className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.expiriense}>
          {myExpArray.map((el) => (
            <div key={Math.random()} className={styles.blockExp}>
              <h2 className={styles.title}>{el.title}</h2>
              <p className={styles.content}>{el.content}</p>
            </div>
          ))}
        </div>
        <h1 className={styles.titleHead}>Мой Опыт</h1>
      </div>
      <Link to={btnPath} className={styles.aboutMeBtn}>
        <span className={styles.btnContent}>{contentBtn}</span>
      </Link>
    </div>
  );
};
export default MyExperience;
