import { LuGithub, LuLinkedin, LuMail, LuInstagram } from "react-icons/lu";

interface SocialMedia {
  name: string;
  icon: React.JSX.Element;
  href: string;
  label: string;
}

export const SOCIAL_MEDIAS: Array<SocialMedia> = [
  {
    name: "linkedin",
    icon: <LuLinkedin />,
    href: "https://www.linkedin.com/in/fransiscushermanto/",
    label: "LinkedIn",
  },
  {
    name: "github",
    icon: <LuGithub />,
    href: "https://github.com/fransiscushermanto",
    label: "Github",
  },
  {
    name: "instagram",
    icon: <LuInstagram />,
    href: "https://www.instagram.com/frans_huang/",
    label: "Instagram",
  },
  {
    name: "email",
    icon: <LuMail />,
    href: "mailto:fransiscus.huang47@gmail.com",
    label: "Email",
  },
];
