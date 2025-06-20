import type { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps
  extends NextLinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {}
