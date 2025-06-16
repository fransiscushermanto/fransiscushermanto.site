import { Card } from "@chakra-ui/react";

import { Skeleton } from "@/components/ui/skeleton";
import { projectCardCss } from "./styles";

const ProjectCardSkeleton = () => {
  return (
    <Skeleton asChild>
      <Card.Root className={projectCardCss} />
    </Skeleton>
  );
};

export default ProjectCardSkeleton;
