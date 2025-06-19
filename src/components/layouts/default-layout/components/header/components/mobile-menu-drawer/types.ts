import type { DrawerContentProps, DrawerRootProps } from "@chakra-ui/react";

export interface MobileMenuDrawerProps
  extends Pick<DrawerRootProps, "defaultOpen" | "restoreFocus" | "children">,
    Omit<DrawerContentProps, "children"> {
  open: boolean;
  onClose: () => void;
}
