import { cx } from "@pandacss/css";

import { FeaturedProject, Skill, Profile } from "./sections";
import { homeCss } from "./styles";

const Home = () => {
  return (
    <div className={cx("home-page", "container", homeCss)}>
      <Profile />
      <Skill />
      <FeaturedProject />
    </div>
  );
};

export default Home;
