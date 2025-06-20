import { Link } from "@/components/elements/link";
import { NAV_ITEMS } from "./constants";

export function renderMenuItems({
  currentPathname,
  onClick,
}: {
  currentPathname: string;
  onClick?: (path: string) => void;
}): React.ReactNode[] {
  return NAV_ITEMS.map(({ href, title }) => (
    <li key={href} className="nav-items__item">
      <Link
        href={href}
        data-active={currentPathname === href}
        className="nav-items__item__link"
        onClick={() => onClick?.(href)}
      >
        {title}
      </Link>
    </li>
  ));
}
