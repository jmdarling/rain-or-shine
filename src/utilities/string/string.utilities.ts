export function titleCase(stringToBeCapitalized: string): string {
  const wordsToBeCapitalized = stringToBeCapitalized.split(" ");
  const capitalizedWords = wordsToBeCapitalized.map(
    (wordToBeCapitalized: string) => {
      return (
        wordToBeCapitalized[0].toUpperCase() +
        wordToBeCapitalized.slice(1).toLowerCase()
      );
    }
  );
  return capitalizedWords.join(" ");
}
