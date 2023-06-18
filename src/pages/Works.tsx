import { FC } from "react";
import Header from "../components/Header";
import Carusel from "../components/Carusel";

const Works: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header colorFont="#ff8c78" />
      <Carusel />
    </div>
  );
};
export default Works;
