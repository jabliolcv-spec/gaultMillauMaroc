
/**
 * Collection complète de news mockées pour tester tous les cas de figure
 * - Avec/sans boutons (0, 1 ou 2 boutons)
 * - Différents types de boutons : RESTAURANT, PEOPLE, ARTISAN, HOTEL, WINERY
 * - Avec/sans thèmes
 * - Titres et résumés de différentes longueurs
 * - News avec données très longues pour tester le multiligne
 */

// News "Une" - Pour SingleNewsCard (news principale en grand format)
// Note: Actuellement utilisé comme objet unique, mais peut être transformé en tableau
export const NewsCardData = {
  id: "news-une-1",
  title: "Nouveau guide Gault&Millau : cap sur le Maroc",
  resume:
    "Gault&Millau poursuit son extension internationale. Un nouveau guide sera lancé dès mai 2026 pour récompenser les plus belles tables, les chefs remarquables et les prestigieux établissements du Maroc",
  slug: "nouveau-guide-gault-and-millau-cap-sur-le-maroc",
  thumbId: "046b4a0f-827b-4e89-9d16-0b2e9c4de3fa",
  theme: ["Actus & Rendez-vous"],
};
