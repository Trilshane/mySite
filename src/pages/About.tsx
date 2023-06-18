import { FC } from "react";
import AboutMeTitle from "../components/AboutMeTitle";
import MyExperience from "../components/MyExperience";
import Header from "../components/Header";

const About: FC = () => {
  return (
    <>
      <Header colorFont="#77b0c7" />
      <AboutMeTitle />
      <MyExperience contentBtn="Мои Работы" btnPath="/works" bg="#77b0c7" />
    </>
  );
};
export default About;
