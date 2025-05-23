import { Icon, Tag } from "@chakra-ui/react";

import { InfiniteLoopSlider } from "../infinite-loop-slider";
import type { TechnologiesSliderProps } from "./types";

const TechnologiesSlider = (props: TechnologiesSliderProps) => {
  const { items, isReversed } = props;

  return (
    <InfiniteLoopSlider gap={3} isReversed={isReversed}>
      {items.map(({ icon, name, label }) => (
        <Tag.Root
          className="technology"
          variant="subtle"
          rounded="full"
          size="lg"
          key={name}
        >
          <Tag.StartElement
            display="flex"
            maxW="full"
            className="technology__icon"
          >
            <Icon color={icon.color}>{icon.element}</Icon>
          </Tag.StartElement>
          <Tag.Label
            fontWeight="medium"
            whiteSpace="nowrap"
            overflow="auto"
            className="technology__label"
          >
            {label}
          </Tag.Label>
        </Tag.Root>
      ))}
    </InfiniteLoopSlider>
  );
};

export default TechnologiesSlider;
