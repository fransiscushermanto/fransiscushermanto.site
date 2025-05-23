import type { StackProps } from "@chakra-ui/react";

export interface InfiniteLoopSliderProps extends StackProps {
  isReversed?: boolean;
  children: Iterable<React.ReactNode>;
}
