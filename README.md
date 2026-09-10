=== ULTIMATE SHOP — FC27 · LE DÉLIRIUM ===

Application de fidélité pour les animations FC27 du Délirium.
Les participants cumulent des points (présence, matchs, défis, bingo foot…)
et les échangent contre des cadeaux tout au long de la saison
(6 dates prévues jusqu'à décembre inclus, avant les soirées Ligue des Champions).

--- 4 ONGLETS ---
1. 🎯 GAGNER      — le barème de points, expliqué et éditable depuis l'admin
2. 🎁 CATALOGUE   — les cadeaux à débloquer, avec ta progression perso
3. 🏆 CLASSEMENT  — le classement général (évolue quand un joueur dépense ses points)
4. 📅 ANIMATIONS  — les prochaines dates au Délirium

--- "QUI ES-TU ?" ---
Chaque joueur peut se sélectionner dans un menu (Catalogue / Classement)
pour voir sa progression perso : "il te manque X points pour tel cadeau".
C'est un confort d'affichage stocké dans le navigateur (localStorage) —
ce n'est pas un compte sécurisé, il n'y a pas de mot de passe joueur.

--- ADMIN ---
Le bouton ⚙️ (en bas à droite) ouvre le panneau d'administration.
Mot de passe par défaut : SHOP2026 (à changer dans index.html, ligne `const PASS = ...`).

Depuis l'admin tu peux :
- Ajouter/renommer/supprimer des joueurs
- Créditer des points en un clic (boutons rapides basés sur le barème)
  ou manuellement (points bonus + motif)
- Enregistrer l'échange d'un cadeau (déduit les points, décrémente le stock,
  garde un historique)
- Gérer le catalogue de cadeaux (nom, coût, emoji, badge "nouveau", stock)
- Gérer le barème de points et son texte d'introduction
- Gérer les dates d'animations (à cocher "passée" une fois l'événement fait)
- Exporter/Importer une sauvegarde JSON complète

--- BASE DE DONNÉES ---
Même projet Supabase que "48 Coachs en Amérique", table `ul_data`
(clé/valeur). Les nouvelles données utilisent des clés dédiées :
`shop_players`, `shop_catalog`, `shop_rules`, `shop_events`, `shop_redemptions`.
Les anciennes clés (`coaches`, `groups`, `visual`, `elim`) ne sont plus lues
ni écrites par cette application — elles peuvent être supprimées de la table
si tu veux repartir propre :

  DELETE FROM ul_data WHERE key IN ('coaches','groups','visual','elim');

L'écriture se fait désormais en upsert (elle crée la ligne si besoin), donc
aucune manipulation SQL n'est obligatoire pour démarrer : la première
sauvegarde depuis l'admin crée les lignes `shop_*` automatiquement.

=== FIN ===
