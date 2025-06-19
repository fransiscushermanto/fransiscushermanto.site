import { cx } from "@pandacss/css";

import {
  DrawerBackdrop,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
} from "@/components/ui/drawer";
import type { MobileMenuDrawerProps } from "./types";

const MobileMenuDrawer = (props: MobileMenuDrawerProps) => {
  const { children, onClose, open, className, ...restProps } = props;

  return (
    <DrawerRoot size="full" open={open}>
      <DrawerBackdrop />
      <DrawerContent
        {...restProps}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={cx("mobile-menu-drawer", className)}
      >
        <DrawerCloseTrigger iconSize="lg" onClick={onClose} />
        {children}
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenuDrawer;
