import { FC } from "react";
import MyExperience from "../components/MyExperience";
import Projects from "../components/Projects";
import Title from "../components/Title";
import Header from "../components/Header";

const HomePage: FC = () => {
  return (
    <>
      <Header colorFont="#ff8c78" />
      <Title />
      <MyExperience contentBtn="Обо мне" btnPath="/about" bg="#ff8c78" />
      <Projects />
    </>
  );
};
export default HomePage;
