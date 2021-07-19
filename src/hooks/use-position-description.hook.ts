import { Position, PositionDescription } from "../models/geolocation.model";
import { useEffect, useState } from "react";
import { getPositionDescriptionFromPosition } from "../services/geolocation/geolocation.service";

export function usePositionDescription(currentPosition: Position | undefined) {
  const [positionDescription, setPositionDescription] =
    useState<PositionDescription>();

  useEffect(() => {
    let isMounted = true;

    if (currentPosition == null) {
      return;
    }

    getPositionDescriptionFromPosition(currentPosition).then(
      (positionDescription: PositionDescription) => {
        if (!isMounted) {
          return;
        }

        setPositionDescription(positionDescription);
      }
    );

    return () => {
      isMounted = false;
    };
  }, [currentPosition]);

  return positionDescription;
}
