import { Icon } from "@chakra-ui/react";
import { cx } from "@styled-system/css";

import { Tag } from "@/components/ui/tag";

import { InfiniteLoopSlider } from "../infinite-loop-slider";
import type { TechnologiesSliderProps } from "./types";
import { tagCss } from "./styles";

const TechnologiesSlider = (props: TechnologiesSliderProps) => {
  const { items, isReversed } = props;

  return (
    <InfiniteLoopSlider gap={3} isReversed={isReversed}>
      {items.map(({ icon, name, label }) => (
        <Tag
          className={cx("technology", tagCss)}
          variant="subtle"
          rounded="full"
          size="lg"
          key={name}
          startElement={<Icon color={icon.color}>{icon.element}</Icon>}
        >
          {label}
        </Tag>
      ))}
    </InfiniteLoopSlider>
  );
};

export default TechnologiesSlider;
