export function analyzePassword(password) {
  const hintsObj = {
    length: password.length,
    hasCharacters: password.match(/[a-zA-Z]/gi) ? true : false,
    hasNumbers: password.match(/\d/g) ? true : false,
  };
  return hintsObj;
}
