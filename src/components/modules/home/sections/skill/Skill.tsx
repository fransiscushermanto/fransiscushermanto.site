import { cx } from "@pandacss/css";

import { TECHNOLOGIES } from "@/constants/technologies";

import { TechnologiesSlider } from "./components";
import { skillCss } from "./styles";

const Skill = () => {
  return (
    <section className={cx("skill", skillCss)}>
      <div className="text-wrapper">
        <h2 className="title">Skill</h2>
        <p className="muted-text">Technologies and tools I had used/worked with</p>
      </div>
      <div className="skill__technologies">
        <TechnologiesSlider
          items={[...TECHNOLOGIES].sort(() => Math.random() - 0.5)}
        />
        <TechnologiesSlider
          items={[...TECHNOLOGIES].sort(() => Math.random() - 0.5)}
          isReversed
        />
        <TechnologiesSlider
          items={[...TECHNOLOGIES].sort(() => Math.random() - 0.5)}
        />
      </div>
    </section>
  );
};

export default Skill;
