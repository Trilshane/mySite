import { FC } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "../scss/Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.content}>
        Сделано с <AiFillHeart /> Русланом Латыповым
      </p>
    </div>
  );
};
export default Footer;
