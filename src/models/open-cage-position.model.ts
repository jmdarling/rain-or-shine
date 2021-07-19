export interface OpenCagePosition {
  results: OpenCagePositionResult[];
}

export interface OpenCagePositionResult {
  components: OpenCasePositionResultComponents;
}

export interface OpenCasePositionResultComponents {
  city: string;
  state: string;
}
