/** Mot à recopier pour confirmer une réinitialisation (deuxième vérification). */
export const MOT_CONFIRMATION = "RÉINITIALISER";

/** Comparaison tolérante : casse, espaces et accents ignorés. */
export const confirmationValide = (saisie: string) =>
  normaliser(saisie) === normaliser(MOT_CONFIRMATION);

const normaliser = (s: string) =>
  s.trim().toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
