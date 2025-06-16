import { cx } from "@pandacss/css";

import { SocialMedia } from "@/components/elements";
import { footerCss } from "./styles";

const Footer = () => {
  return (
    <footer className={cx("footer", footerCss)}>
      <div className="container">
        <p className="muted-text">
          Fransiscus Hermanto © {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
