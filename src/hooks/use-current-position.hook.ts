import { useEffect, useState } from "react";
import { Position } from "../models/geolocation.model";
import { getCurrentPosition } from "../utilities/geolocation/geolocation.utilities";

export function useCurrentPosition(): Position | undefined {
  const [position, setPosition] = useState<Position>();

  useEffect(() => {
    let isMounted = true;

    getCurrentPosition().then((position: Position) => {
      if (!isMounted) {
        return;
      }

      setPosition(position);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return position;
}
