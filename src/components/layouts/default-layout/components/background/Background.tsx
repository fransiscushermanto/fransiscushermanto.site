import { cx } from "@styled-system/css";

import { backgroundCss } from "./styles";

const Background = () => {
  return <div className={cx(backgroundCss, "dot-pattern")} />;
};

export default Background;
