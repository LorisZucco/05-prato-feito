export function formatMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  if (hours == 0) return `${rest} min`;
  if (rest == 0) return `${hours} h`;
  return `${hours} h ${rest} min`;
}

// Uma casa decimal, com vírgula e sem ",0": 1.2 vira "1,2" e 1 vira "1"
function formatNumber(value) {
  return value.toFixed(1).replace(".0", "").replace(".", ",");
}

export function formatQuantity(quantity, unit) {
  if (unit == "g" && quantity >= 1000)
    return `${formatNumber(quantity / 1000)} kg`;
  if (unit == "ml" && quantity >= 1000)
    return `${formatNumber(quantity / 1000)} l`;
  if (unit == "dente")
    return `${quantity} ${quantity == 1 ? "dente" : "dentes"}`;
  if (unit == "maço") return `${quantity} ${quantity == 1 ? "maço" : "maços"}`;
  return `${formatNumber(quantity)} ${unit}`;
}
