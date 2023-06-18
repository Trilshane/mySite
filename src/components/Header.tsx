import { FC, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

import styles from "../scss/Header.module.scss";

type headerType = {
  colorFont: string;
};

const Header: FC<headerType> = ({ colorFont }) => {
  const [isHoverAbout, setIsHoverAbout] = useState<boolean>(false);
  const [isHoverWorks, setIsHoverWorks] = useState<boolean>(false);
  const [isHoverContacts, setIsHoverContacts] = useState<boolean>(false);
  const [isHoverGithub, setIsHoverGithub] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);

  const navigationZoneInfoArray = [
    {
      colorfn: isHoverAbout,
      handleMouseEnter: setIsHoverAbout,
      to: "/about",
      info: "Oбо мне",
    },
    {
      colorfn: isHoverWorks,
      handleMouseEnter: setIsHoverWorks,
      to: "/works",
      info: "Работы",
    },
    {
      colorfn: isHoverContacts,
      handleMouseEnter: setIsHoverContacts,
      to: "/contacts",
      info: "Контакты",
    },
  ];

  type fontColorType = {
    color: string;
  };

  const colorFn = (hover: boolean) => {
    const colorStyle: fontColorType = {
      color: hover ? colorFont : "#fff",
    };
    return colorStyle;
  };

  const handleMouseEnter = (
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsHover(true);
  };
  const handleMouseLeave = (
    setIsHover: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsHover(false);
  };

  return (
    <div className={styles.conatiner}>
      <Link to="/" className={styles.logo}>
        <b className={styles.bold}>Руслан</b> Латыпов
      </Link>
      <div
        className={
          nav
            ? `${styles.menuContainer} ${styles.active}`
            : styles.menuContainer
        }
      >
        <div className={styles.navigationZone}>
          {navigationZoneInfoArray.map((el) => (
            <Link
              onMouseEnter={() => handleMouseEnter(el.handleMouseEnter)}
              onMouseLeave={() => handleMouseLeave(el.handleMouseEnter)}
              style={colorFn(el.colorfn)}
              to={el.to}
              className={styles.navElem}
              key={Math.random()}
            >
              {el.info}
            </Link>
          ))}
        </div>
        <a
          onMouseEnter={() => handleMouseEnter(setIsHoverGithub)}
          onMouseLeave={() => handleMouseLeave(setIsHoverGithub)}
          style={colorFn(isHoverGithub)}
          href="https://github.com/Trilshane"
          className={styles.github}
        >
          <AiFillGithub /> Github
        </a>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
        <HiOutlineMenuAlt3 />
      </div>
    </div>
  );
};

export default Header;
