"use client";

import { IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { cx } from "@pandacss/css";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "@/components/elements/link";
import { ColorModeButton, ColorModeSwitch } from "@/components/ui/color-mode";
import { Logo } from "@/components/shapes";
import useIsMobile from "@/hooks/use-is-mobile";
import { MobileMenuDrawer } from "./components";
import { renderMenuItems } from "./utils";
import { headerCss, mobileMenuDrawerCss } from "./styles";

const Header = () => {
  const pathname = usePathname();
  const mobileMenuDisclosure = useDisclosure();

  const isMobile = useIsMobile();

  return (
    <header className={cx("header", headerCss)}>
      <div className="container">
        <nav>
          <Text fontSize="xl" fontWeight="bold" asChild>
            <Link href="/">
              <Logo />
            </Link>
          </Text>
          <ul className="nav-items">
            {renderMenuItems({
              currentPathname: pathname,
            })}
          </ul>
        </nav>
        <IconButton
          className="mobile-nav"
          variant="ghost"
          onClick={mobileMenuDisclosure.onOpen}
        >
          <GiHamburgerMenu />
        </IconButton>
        <ColorModeButton className="theme-switch" />
      </div>

      <MobileMenuDrawer
        open={isMobile && mobileMenuDisclosure.open}
        onClose={mobileMenuDisclosure.onClose}
        className={mobileMenuDrawerCss}
      >
        <ul className="nav-items">
          {renderMenuItems({
            currentPathname: pathname,
            onClick: mobileMenuDisclosure.onClose,
          })}
          <li className="nav-items__item">
            <ColorModeSwitch />
          </li>
        </ul>
      </MobileMenuDrawer>
    </header>
  );
};

export default Header;
