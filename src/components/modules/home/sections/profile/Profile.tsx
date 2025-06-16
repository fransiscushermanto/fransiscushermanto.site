import Link from "next/link";
import Image from "next/image";
import { cx } from "@pandacss/css";

import profilePicture from "@/assets/images/me.jpeg";
import { Button } from "@/components/ui/button";
import { SocialMedia } from "@/components/elements/social-media";

import { Underline } from "./shapes";
import { profileCss } from "./styles";

const Profile = () => {
  return (
    <section className={cx("profile", profileCss)}>
      <div className="profile__picture shadow-md">
        <Image src={profilePicture} alt="profile-picture" />
      </div>
      <h1 className="profile__name heading-text">Fransiscus Hermanto</h1>
      <h2 className="profile__job-title muted-text">Software Engineer</h2>
      <p className="profile__description sub-heading-text">
        I am a frontend developer with{" "}
        <Link href="/experience">
          <span className="underline">
            <Underline />
          </span>
          4+ years of experience
        </Link>
        , passionate about learning, innovation, and creating impactful tools.
      </p>
      <div className="profile__actions">
        <Button size="sm" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
        <Button size="sm" asChild variant="outline">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
      <SocialMedia />
      <div className="profile__location">
        <span className="circle" />
        <span className="location muted-text">Medan, Indonesia</span>
      </div>
    </section>
  );
};

export default Profile;
