import { PositionDescription } from "../models/geolocation.model";
import { OpenCagePosition } from "../models/open-cage-position.model";

export function mapOpenCagePositionToPositionDescription(
  openCagePosition: OpenCagePosition
): PositionDescription {
  return {
    city: openCagePosition.results[0].components.city,
    state: openCagePosition.results[0].components.state,
  };
}
