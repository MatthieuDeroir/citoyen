import { revalidatePath } from "next/cache";

/**
 * Purge le cache client des pages qui affichent de la progression dérivée
 * (parcours, dashboard, classement), pour qu'un retour en arrière dans
 * l'historique montre des chiffres à jour.
 *
 * Volontairement ciblé plutôt que `revalidatePath("/", "layout")` : une
 * revalidation racine invalide aussi la page de session en cours (QCM,
 * cartes, examen…), ce qui force son composant serveur à se ré-exécuter et
 * à retirer un nouveau paquet mélangé au milieu d'une session active — la
 * carte ou question courante change alors sous les pieds de l'utilisateur.
 * Ne jamais ajouter ici une route qui héberge une session interactive
 * (/session/*, /erreurs, /revision, /revision/qcm, /examen/nouveau).
 */
export function revalidateProgressPaths() {
  revalidatePath("/parcours");
  revalidatePath("/parcours/[sousTheme]", "page");
  revalidatePath("/dashboard");
  revalidatePath("/classement");
}
