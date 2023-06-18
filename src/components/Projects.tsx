import { FC, useRef } from "react";
import { Link } from "react-router-dom";

import galeryOfPainting from "../images/GalleryOfPaintings.png";
import deconstructionOfBuilding from "../images/DeconstructionOfBuilding.png";

import styles from "../scss/Projects.module.scss";

const Projects: FC = () => {
  const img1: React.MutableRefObject<HTMLImageElement | null> = useRef(null);
  const img2: React.MutableRefObject<HTMLImageElement | null> = useRef(null);

  const startRotate = (
    ref: React.MutableRefObject<HTMLImageElement | null>
  ) => {
    if (ref && ref.current) {
      const halfHeight = ref.current.offsetHeight / 2;
      const halfWidth = ref.current.offsetWidth / 2;

      ref.current.addEventListener("mousemove", (event) => {
        if (ref.current) {
          ref.current.style.transform =
            "rotateX(" +
            -(event?.offsetY - halfHeight) / 7 +
            "deg) rotateY(" +
            (event?.offsetX - halfWidth) / 7 +
            "deg)";
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мои работы</h1>
      <div className={styles.projects}>
        <a
          className={`${styles.project} ${styles.project1}`}
          href="https://trilshane.github.io/fwt-trainee-project/"
        >
          <img
            ref={img1}
            onMouseOver={() => startRotate(img1)}
            className={styles.imgProject}
            src={galeryOfPainting}
            alt="galeryOfPainting"
          />
          <h3 className={styles.titleProject}>Картинная галлерея</h3>
        </a>
        <a
          className={`${styles.project} ${styles.project2}`}
          href="https://trilshane.github.io/"
        >
          <img
            ref={img2}
            onMouseOver={() => startRotate(img2)}
            className={styles.imgProject}
            src={deconstructionOfBuilding}
            alt="deconstructionOfBuilding"
          />
          <h3 className={styles.titleProject}>Демонтаж зданий</h3>
        </a>
      </div>
      <Link to="/works" className={styles.myProjectsBtn}>
        <span className={styles.btnContent}>больше проетов</span>
      </Link>
    </div>
  );
};
export default Projects;
