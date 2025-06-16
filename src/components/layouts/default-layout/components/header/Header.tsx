"use client";

import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { cx } from "@pandacss/css";
import { usePathname } from "next/navigation";

import { ColorModeButton } from "@/components/ui/color-mode";
import { Logo } from "@/components/shapes";
import { NAV_ITEMS } from "./constants";
import { headerCss } from "./styles";

const Header = () => {
  const pathname = usePathname();

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
            {NAV_ITEMS.map(({ title, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  data-active={pathname === href}
                  className="nav-item"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ColorModeButton className="theme-switch" />
      </div>
    </header>
  );
};

export default Header;
