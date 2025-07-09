function formatText(text) {
  const words = text.split(" ");
  const capitalisedWords = words.map((word) => {
    const firstLetter = word.slice(0, 1).toUpperCase();
    return firstLetter + word.slice(1);
  });
  return capitalisedWords.join(" ");
}

export default formatText;
