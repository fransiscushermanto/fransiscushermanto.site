import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { Card, Tag } from "@chakra-ui/react";
import { cx } from "@pandacss/css";
import { useSuspenseQuery } from "@apollo/client";

import { Button } from "@/components/ui/button";
import { TECHNOLOGIES, type Technology } from "@/constants/technologies";
import { RepositoryQueryDocument } from "@/graphql/types/graphql";

import { useHandleScrollOnDrag } from "./usecase";
import type { ProjectCardProps } from "./types";
import { projectCardCss } from "./styles";

const ProjectCard = (props: ProjectCardProps) => {
  const { className, projectName, tags, owner, ...restProps } = props;

  const bindRef = useHandleScrollOnDrag();

  const { data } = useSuspenseQuery(RepositoryQueryDocument, {
    fetchPolicy: "cache-and-network",
    variables: { owner, name: projectName },
  });

  const repository = data?.repository;

  return (
    <Card.Root
      maxW="sm"
      className={cx("project-card", projectCardCss, className)}
      {...restProps}
    >
      <div className="project-card__image">
        {repository?.openGraphImageUrl && (
          <Image
            src={repository?.openGraphImageUrl}
            alt={repository?.name ?? ""}
            width={382}
            height={192}
          />
        )}
      </div>
      <Card.Body>
        <Card.Title mb={2} className="project-card__title">
          {repository?.name}
        </Card.Title>
        <Card.Description
          mb={4}
          className="project-card__description"
          title={repository?.description ?? ""}
        >
          {repository?.description}
        </Card.Description>
        <div ref={bindRef} className="project-card__tags">
          {useMemo(
            () =>
              tags.map((tag) => {
                let icon: Technology["icon"] | null = null,
                  name: string = "",
                  label: string = "";
                const tech = TECHNOLOGIES.find(({ name }) => name === tag);

                if (tech) {
                  icon = tech.icon;
                  name = tech.name;
                  label = tech.label;
                }

                if (typeof tag === "object") {
                  name = tag.name;
                  label = tag.label;
                }

                if (typeof tag !== "object" && !tech) return null;

                return (
                  <Tag.Root
                    backgroundColor="secondary"
                    fontSize="xs"
                    py={1}
                    px={3}
                    key={name}
                    rounded="md"
                    userSelect="none"
                  >
                    {icon && (
                      <Tag.StartElement color={icon.color}>
                        {icon.element}
                      </Tag.StartElement>
                    )}
                    <Tag.Label
                      fontWeight="medium"
                      whiteSpace="nowrap"
                      overflow="auto"
                    >
                      {label}
                    </Tag.Label>
                  </Tag.Root>
                );
              }),
            [tags],
          )}
        </div>
        <div className="project-card__actions">
          <Button variant="outline" size="xs" gap={2} asChild>
            <Link
              href={repository?.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LuGithub />
              Code
            </Link>
          </Button>
          {repository?.homepageUrl && (
            <Button size="xs" gap={2} asChild>
              <Link
                href={`${/^https:\/\//.test(repository.homepageUrl) ? "" : "https://"}${repository.homepageUrl}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <LuExternalLink />
                Live Preview
              </Link>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;
