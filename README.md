# Test front end

Dans ce test il s'agira:

- D'utiliser l'API de Wemap pour aller chercher du contenu
- D'afficher la liste de contenu
- Créer un champ de recherche pour filtrer le contenu grâce à l'API
- Faire une pagination 10 par 10

La stack technique est assez libre, utilisez les technos sur lesquelles vous êtes à l'aise.
Dans ce test, pas de pression mais on aura certaines exigences :) notamment sur :

la segmentation des composants;
la propreté du code;
la logique d’intégration;

Lien de l'API:

https://api.getwemap.com/v3.0/pinpoints/search

Paramètres:
- `query`: Texte de recherche
- `offset`: Offset
- `limit`: Nombre de résultat
- `state`: Etat du point (publié = 1)

Lien vers la carte:
https://livemap.getwemap.com/#/pinpoints/ID