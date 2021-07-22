import React, { useMemo } from "react";
import { useCurrentPosition } from "../../hooks/use-current-position.hook";
import { useDate } from "../../hooks/use-date.hook";
import { usePositionDescription } from "../../hooks/use-position-description.hook";
import { formatDateAsDayMonthDateYear } from "../../utilities/date/date-format.utilities";
import "./heading.css";
import Location from "./location.svg";

export interface HeadingProps {
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ className }) => {
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
          <img
            alt="location"
            className="heading__position-description__icon"
            src={Location}
          />
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

  const combinedClassName = `heading ${className}`;

  return (
    <h1 className={combinedClassName}>
      <span className="sr-only">Weather for</span>
      <HeadingPositionDescription />
      <HeadingDate />
    </h1>
  );
};
