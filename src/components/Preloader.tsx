import { FC } from "react";

import styles from "../scss/Preloader.module.scss";

const Preloader: FC = () => {
  return (
    <div className={styles.preloaderContainer}>
      <p className={styles.preloaderText}>@trilshane</p>
    </div>
  );
};

export default Preloader;
