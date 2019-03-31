export default function prettifyTerm(term) {
  if (term === "FA") return "Fall";
  if (term === "SP") return "Spring";
  if (term === "SU") return "Summer";
  return term;
}
