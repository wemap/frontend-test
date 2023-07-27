# Test front end

Dans ce test il s'agira:

- D'utiliser l'API de Wemap pour récupérer du contenu
- D'afficher la liste de contenu
- Créer un champ de recherche pour filtrer le contenu grâce à l'API
- Faire une pagination 10 par 10

Une base du projet vous est donné en React mais vous êtes libre d'utiliser une autre techno, utilisez celle pour laquelle vous êtes à l'aise.
Dans ce test, pas de pression mais on aura certaines exigences :) notamment sur :

- la segmentation des composants;
- la propreté du code;
- la logique d’intégration;

Lien de l'API:

https://api.getwemap.com/v3.0/pinpoints/search

Paramètres:
- `query`: Texte de recherche
- `offset`: Position du début des résultats
- `limit`: Nombre de résultat

Exemple: `https://api.getwemap.com/v3.0/pinpoints/search?query=Musee&offset=0&limit=10`

Lien vers la carte:
https://livemap.getwemap.com/#/pinpoints/ID

## Rendu attendu 

![](/rendu.png)
