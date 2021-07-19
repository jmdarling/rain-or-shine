import React, { useMemo } from "react";
import { formatDateAsDayMonthDateYear } from "../../utilities/date/date-format.utilities";
import { useDate } from "../../hooks/use-date.hook";
import { useCurrentPosition } from "../../hooks/use-current-position.hook";
import { usePositionDescription } from "../../hooks/use-position-description.hook";

import "./heading.css";

export interface HeadingProps {}

export const Heading: React.FC<HeadingProps> = () => {
  const date = useDate();
  const currentPosition = useCurrentPosition();
  const positionDescription = usePositionDescription(currentPosition);

  const HeadingPositionDescription: React.FC = useMemo(() => {
    return () => {
      if (positionDescription == null) {
        return null;
      }

      return (
        <span className="heading__position-description">
          {positionDescription.city}, {positionDescription.state}
        </span>
      );
    };
  }, [positionDescription]);

  const HeadingDate: React.FC = useMemo(() => {
    return () => {
      return (
        <span className="heading__date">
          {formatDateAsDayMonthDateYear(date)}
        </span>
      );
    };
  }, [date]);

  return (
    <h1 className="heading">
      <span className="sr-only">Weather for</span>
      <HeadingPositionDescription />
      <HeadingDate />
    </h1>
  );
};
