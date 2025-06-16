"use client";

import { useEffect, useRef } from "react";

export function useHandleScrollOnDrag() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) return;

    function onMouseEnter(e: MouseEvent) {
      const target = e.currentTarget as HTMLDivElement;
      const isChildrenOverflowing = target.scrollWidth > target.clientWidth;

      if (!isChildrenOverflowing) return;

      target.style.cursor = "grab";
      target.setAttribute("scrollable", "true");
    }

    function onMouseDown(e: MouseEvent) {
      const target = e.currentTarget as HTMLDivElement;
      const isScrollable = target.getAttribute("scrollable") === "true";

      if (!isScrollable) return;

      target.style.cursor = "grabbing";
      target.setAttribute("grabbed", "true");
      target.setAttribute("start-x", String(e.pageX - target.offsetLeft));
      target.setAttribute("start-scroll", String(target.scrollLeft));
    }

    function onMouseMove(e: MouseEvent) {
      const target = e.currentTarget as HTMLDivElement;
      const isScrollable = target.getAttribute("scrollable") === "true";
      const isGrabbed = target.getAttribute("grabbed") === "true";
      const startX = Number(target.getAttribute("start-x"));
      const startScroll = Number(target.getAttribute("start-scroll"));

      if (!isScrollable || !isGrabbed || isNaN(startX) || isNaN(startScroll))
        return;

      e.preventDefault();
      const x = e.pageX - target.offsetLeft;
      const scroll = x - startX;
      target.scrollLeft = startScroll - scroll;
    }

    function onMouseUp(e: MouseEvent) {
      const target = e.currentTarget as HTMLDivElement;
      const isScrollable = target.getAttribute("scrollable") === "true";

      if (!isScrollable) return;

      target.style.cursor = "grab";
      target.removeAttribute("grabbed");
    }

    function onMouseLeave(e: MouseEvent) {
      const target = e.currentTarget as HTMLDivElement;
      target.removeAttribute("grabbed");
      target.removeAttribute("scrollable");
      target.removeAttribute("style");
    }

    target.addEventListener("mouseenter", onMouseEnter);
    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    target.addEventListener("mousemove", onMouseMove);
    target.addEventListener("mouseleave", onMouseLeave);
  }, []);

  return targetRef;
}
