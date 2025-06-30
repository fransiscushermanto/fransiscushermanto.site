import { LuBriefcase, LuMapPin, LuCalendar } from "react-icons/lu";
import { Icon, Text } from "@chakra-ui/react";
import { cx } from "@styled-system/css";

import {
  TimelineRoot,
  TimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineIndicator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { Tag } from "@/components/ui/tag";
import { EXPERIENCES } from "@/constants/experiences";

import { experienceCss } from "./styles";

const Experience = () => {
  return (
    <div className={cx("experience-page", "container", experienceCss)}>
      <div className="inner-container">
        <h1 className="title heading-text">Experience</h1>
        <p className="subtitle sub-heading-text">
          A summary of my professional journey, highlighting key roles and
          achievements.
        </p>
        <TimelineRoot textAlign="left" className="experience-journey" size="lg">
          {EXPERIENCES.map(
            (
              {
                company,
                employmentType,
                location,
                period,
                responsibilities,
                current,
                title,
              },
              i,
            ) => (
              <TimelineItem
                data-current={current}
                key={i}
                className="experience-journey__item"
              >
                <TimelineConnector>
                  <TimelineIndicator>
                    {current && <LuBriefcase />}
                  </TimelineIndicator>
                </TimelineConnector>
                <TimelineContent className="experience-journey__content">
                  <TimelineTitle
                    justifyContent="space-between"
                    className="job__row"
                  >
                    <div className="job__column left">
                      <Text
                        as="h3"
                        className="job__column__title"
                        fontSize="xl"
                        fontWeight="semibold"
                        lineHeight="short"
                      >
                        {title}
                      </Text>
                      <div className="job__column__company muted-text">
                        <span className="company-icon">
                          <Icon size="sm">
                            <LuBriefcase />
                          </Icon>
                        </span>
                        <span className="company-name">{company}</span>
                        {current && (
                          <Tag
                            variant="subtle"
                            size="md"
                            borderRadius="3xl"
                            px={2}
                            py={1}
                            backgroundColor="hsl(var(--primary) / 0.1)"
                          >
                            Current
                          </Tag>
                        )}
                      </div>
                    </div>
                    <div className="job__column right">
                      <div className="job__column__date muted-text">
                        <span className="date-icon">
                          <Icon>
                            <LuCalendar />
                          </Icon>
                        </span>
                        <span className="date-range">{period}</span>
                      </div>
                      <div className="job__column__location muted-text">
                        <span className="location-icon">
                          <Icon>
                            <LuMapPin />
                          </Icon>
                        </span>
                        <span className="location-name">
                          {location} · {employmentType}
                        </span>
                      </div>
                    </div>
                  </TimelineTitle>
                  <div className="job-responsibilities">
                    <Text
                      as="h4"
                      fontSize="medium"
                      fontWeight="medium"
                      color="foreground"
                    >
                      Key Responsibilities:
                    </Text>
                    <ul className="responsibility-list muted-text">
                      {responsibilities.map((v, i) => (
                        <li key={i} className="responsibility">
                          <div className="bullet-point" />
                          <span className="label">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ),
          )}
        </TimelineRoot>
      </div>
    </div>
  );
};

export default Experience;
