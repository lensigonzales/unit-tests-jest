export function doubleCharacters(word) {
  let doubledWord = "";
  for (let i = 0; i < word.length; i++) {
    doubledWord += word[i].repeat(2);
  }
  return doubledWord;
}
