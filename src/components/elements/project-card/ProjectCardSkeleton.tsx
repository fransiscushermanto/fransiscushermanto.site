
import { Card, Skeleton } from "@chakra-ui/react";

import { projectCardCss } from "./styles";

const ProjectCardSkeleton = () => {
  return (
    <Skeleton asChild>
      <Card.Root className={projectCardCss} />
    </Skeleton>
  );
};

export default ProjectCardSkeleton;
