"use client";

import NextLink from "next/link";
import { forwardRef } from "react";

import { useRouteEventContext } from "@/components/layouts";
import { callAllFn } from "@/utils/fn";
import type { LinkProps } from "./types";

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { href, onClick, ...restProps } = props;

  const routeEvents = useRouteEventContext();

  return (
    <NextLink
      ref={ref}
      href={href}
      onClick={callAllFn(onClick, () =>
        routeEvents.emit("navigate", href.toString()),
      )}
      {...restProps}
    />
  );
});

Link.displayName = "Link";

export default Link;
