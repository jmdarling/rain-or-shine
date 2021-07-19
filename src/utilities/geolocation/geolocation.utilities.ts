import { Position } from "../../models/geolocation.model";

export async function getCurrentPosition(): Promise<Position> {
  return new Promise<Position>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (geolocationPosition) => {
        const position: Position = {
          latitude: geolocationPosition.coords.latitude,
          longitude: geolocationPosition.coords.longitude,
        };

        resolve(position);
      },
      (geolocationPositionError) => {
        reject(geolocationPositionError);
      }
    );
  });
}
