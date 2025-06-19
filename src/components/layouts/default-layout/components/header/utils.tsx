import Link from "next/link";
import { NAV_ITEMS } from "./constants";

export function renderMenuItems({
  currentPathname,
  onClick,
}: {
  currentPathname: string;
  onClick: (path: string) => void;
}): React.ReactNode[] {
  return NAV_ITEMS.map(({ href, title }) => (
    <li key={href} className="nav-items__item">
      <Link
        href={href}
        data-active={currentPathname === href}
        className="nav-items__item__link"
        prefetch={false}
        onClick={() => onClick(href)}
      >
        {title}
      </Link>
    </li>
  ));
}
