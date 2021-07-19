import { Position, PositionDescription } from "../../models/geolocation.model";
import { getConfiguration } from "../../utilities/configuration/configuration.utilities";
import { OpenCagePosition } from "../../models/open-cage-position.model";
import { mapOpenCagePositionToPositionDescription } from "../../mappers/position.mappers";

export async function getPositionDescriptionFromPosition(
  position: Position
): Promise<PositionDescription> {
  const { openCageApiKey, openCageBaseUrl } = getConfiguration();
  const url = `${openCageBaseUrl}?q=${position.latitude}+${position.longitude}&key=${openCageApiKey}`;
  const positionDescriptionResponse: Response = await window.fetch(url);
  const openCagePosition: OpenCagePosition =
    await positionDescriptionResponse.json();
  return mapOpenCagePositionToPositionDescription(openCagePosition);
}
