import { cx } from "@pandacss/css";

import { SOCIAL_MEDIAS } from "@/constants/social-medias";

import { Link } from "../link";
import { socialMediaCss } from "./styles";

const SocialMedia = () => {
  return (
    <div className={cx("social-media", socialMediaCss)}>
      {SOCIAL_MEDIAS.map(({ href, icon, label, name }) => (
        <Link
          key={name}
          href={href}
          rel="noreferrer"
          className="social-media muted-text"
          target="__blank"
        >
          <span className="icon">{icon}</span>
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
