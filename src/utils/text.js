// Cada letra com acento e a letra sem acento que vale no lugar dela
const accents = {
  á: "a",
  à: "a",
  â: "a",
  ã: "a",
  é: "e",
  ê: "e",
  í: "i",
  ó: "o",
  ô: "o",
  õ: "o",
  ú: "u",
  ç: "c",
};

// Deixa o texto em minúsculas, sem acento e sem espaços nas pontas: "  Feijão " vira "feijao".
export function normalizeText(text) {
  const lower = text.toLowerCase().trim();
  let result = "";

  for (let i = 0; i < lower.length; i++) {
    const letter = lower[i];
    result = result + (accents[letter] || letter);
  }

  return result;
}
