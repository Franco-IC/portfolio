export default function formatStringAndTurnFirstLetterToUpperCase(string) {
  let result = [];

  string.split("-").map((word) => {
    result.push([word[0].toUpperCase(), ...word.split("").splice(1)].join(""));
  });

  return result.join(" ");
}
