import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IconButton, Text } from "@chakra-ui/react";

import { home } from "./styles";

import profilePicture from "./assets/me.jpeg";
import { SOCIAL_MEDIAS } from "./constants";
import Link from "next/link";

const Home = () => {
  return (
    <div className={home.root}>
      <div className={home["profile-picture"]}>
        <Image
          src={profilePicture}
          alt="fransiscushermanto"
          priority
          width={126}
          height={126}
        />
      </div>

      <div className={home["profile-info"]}>
        <Text as="h2" textStyle="2xl" fontWeight="semibold" textAlign="center">
          Fransiscus Hermanto
        </Text>
        <Text as="h3" className="title">
          Software Engineer
        </Text>
        <div className="location">
          <span className="icon">
            <CiLocationOn />
          </span>
          <span className="label">Medan, Indonesia</span>
        </div>
      </div>
      <Text className="profile-about" textAlign="center">
        I am a frontend developer with 4+ years of experience, passionate about
        learning, innovation, and creating impactful tools.
      </Text>
      <ul className={home["profile-social-media"]}>
        {SOCIAL_MEDIAS.map(({ href, name, icon }) => (
          <li key={name} className="social-media">
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <IconButton aria-label={name} data-media={name} variant="subtle">
                {icon}
              </IconButton>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
