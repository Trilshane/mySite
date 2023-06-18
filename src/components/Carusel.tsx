import { FC } from "react";
import Slider, { Settings } from "react-slick";

import carusel1 from "../images/Carusel1.png";
import carusel2 from "../images/Carusel2.png";
import carusel3 from "../images/Carusel3.png";
import carusel4 from "../images/Carusel4.png";
import carusel5 from "../images/Carusel5.png";
import carusel6 from "../images/Carusel6.png";

import styles from "../scss/Carusel.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const Carusel: FC = () => {
  const caruselObjectsArray: {
    img: string;
    info: string;
    link: string;
    ghLink: string;
  }[] = [
    {
      img: carusel1,
      info: "Проект картинной галереии написанной с помощью JavaScript библиотеки React. Сами картины и информаци о них подгружаются с бекэнда. В проекте ипользованы такие технологие как React Context",
      link: "https://trilshane.github.io/fwt-trainee-project/",
      ghLink: "https://github.com/Trilshane/fwt-trainee-project",
    },
    {
      img: carusel2,
      info: "Простой рандомайзер цветов написанный с помощью одной функции. Выполнен с помощью JavaScript и библиотеки React",
      link: "https://trilshane.github.io/Random-color-React/",
      ghLink: "https://github.com/Trilshane/Random-color-React",
    },
    {
      img: carusel3,
      info: "Проект сделан на основе урока блогера Archakov Blog, с добавлением своих фишек и собственным написанием кода. Пиццы и информация о них подгружаются с бекэнда. Написан с помощью TypeScript, библиотеки React и Redux Toolkit.",
      link: "https://trilshane.github.io/pizzaProject",
      ghLink: "https://github.com/Trilshane/pizzaProject",
    },
    {
      img: carusel4,
      info: "Незаконченный проект сайта по исполнительной документации, написанный на HTML, CSS и JavaScript",
      link: "https://trilshane.github.io/-executive-documentation-website/docs.html#docsNav4",
      ghLink: "https://github.com/Trilshane/-executive-documentation-website",
    },
    {
      img: carusel5,
      info: "Первая работа и первая комерческая работа. Сайт выполнен по дизайну заказчика. Написан с помощью JTML, CSS и JavaScript",
      link: "http://irinasudarikova.ru/",
      ghLink: "https://github.com/Trilshane/firtsSite",
    },
    {
      img: carusel6,
      info: "Проект лендинга для компании по демонтажу зданий. Написан с помощью JavaScript и и библиотеки React ",
      link: "https://trilshane.github.io/",
      ghLink: "https://github.com/Trilshane/demolitionOfBuildings",
    },
  ];

  const settings: Settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.conatiner}>
      <h1>Мои Работы</h1>
      <Slider {...settings}>
        {caruselObjectsArray.map((obj) => (
          <div className={styles.imgZone} key={Math.random()}>
            <img
              className={styles.caruselItem}
              src={obj.img}
              alt="caruselImg"
            />
            <div className={styles.infoZone}>
              <p className={styles.info}>{obj.info}</p>
              <div className={styles.linkZone}>
                <a className={styles.link} href={obj.link}>
                  Ссылка
                </a>
                <a className={styles.link} href={obj.ghLink}>
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carusel;
