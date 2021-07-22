import { OpenCagePosition } from "../models/open-cage-position.model";
import { mapOpenCagePositionToPositionDescription } from "./position.mappers";

describe("position.mappers", () => {
  describe("#mapOpenCagePositionToPositionDescription", () => {
    it("should map an OpenCagePosition to a PositionDescription", () => {
      // Arrange.
      const openCagePosition: OpenCagePosition = {
        results: [
          {
            components: {
              city: "Dallas",
              state: "Texas",
            },
          },
        ],
      };

      // Act.
      const positionDescription =
        mapOpenCagePositionToPositionDescription(openCagePosition);

      // Assert.
      expect(positionDescription).toEqual({
        city: "Dallas",
        state: "Texas",
      });
    });
  });
});
