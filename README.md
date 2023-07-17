# Introduction

Ce projet a pour objectif de développer une application web qui permette de visualiser des données de façon dynamique. Ce principe peut être pris de manière très large : ainsi, il peut s’agir de construire une page web affichant un graphique « classique » reflétant l’évolution de telle ou telle donnée. Mais il peut aussi s’agir de créer une animation mettant en scène des données de façon plus originale ou ludique (voir plus bas dans les idées proposées).

## **Contraintes générales**

- Langage: libre (selon le niveau choisi)
- Durée de la séquence: 2 semaines

## **Objectifs globaux pédagogiques**

- Découvrir le traitement de données en temps réel
- Explorer des possibilités d’animation web
- Se confronter aux choix d’architecture que présente la conception de tout applicatif
- Travailler son organisation d’équipe
- Découper le projet en tâches et en domaines
- Trouver un mode de travail en groupe qui permette de mobiliser toutes les apprenantes de l’équipe
- Maîtriser les commandes de base git
- Se distribuer les domaines
- Se concerter sur les points de rencontres de nos domaines respectifs

# Je débute

## **Visualiser le temps qui passe**

Nous vous proposons de créer une animation simple qui dépende du temps (date, heure, durée, …). Par exemple, il pourrait s’agir de dessiner un arbre qui aurait de nouvelles feuilles toutes les X secondes, et dont la couleur dépendrait du moment de la journée.

_Pour ce niveau, le langage utilisé sera automatiquement JavaScript afin de vous permettre de faire faire tout le traitement par le navigateur_

## **Objectifs pédagogiques**

- Appliquer l’asynchrone
- Se familiariser avec une bibliothèque d’animation graphique JavaScript
- Se poser la question de la durée de vie de son applicatif
- Manipuler du CSS et du HTML
- Discuter d’un projet commun avec d’autres personnes pour débattre / faire des choix
- Mettre en place un environnement Web permettant de travailler en groupe sur le même projet
- Créer un repo commun et utiliser les commandes de base git (`git push`, `git pull`, `git commit`)

## **Étapes possibles pour se lancer**

- **Se mettre d’accord sur l’orientation du projet** Il y a quelques choix de conception à faire sur ce projet :
  - quelle est la donnée que vous souhaitez représenter ? L’heure actuelle, le moment de la journée, une statistique connue (toutes les X secondes il se passe telle chose dans le monde) ?
  - quelle forme souhaitez-vous donner à cette information ? Un paysage qui change au fur et à mesure de la journée, un dessin qui se complexifie au fur et à mesure, etc.
  - le dessin se fera-t-il entièrement par le code ou partirez-vous d’une image existante ?
  - quel librairie souhaitez-vous utiliser pour cela ? Des exemples (non exhaustifs) sont donnés dans les ressources du projet
- **Récupérer l’heure au sein du navigateur** Quelque soit la façon dont vous l’afficherez, il s’agit dans un premier temps de récupérer l’heure actuelle au sein du navigateur.
- **Dessiner quelque chose à l’écran selon l’heure** En utilisant la librairie de votre choix, vous pouvez dessiner ce que vous souhaitez, et décider au sein de l’équipe quel élément changera avec le temps : il s’agit donc de relier le dessin fait à l’écran avec l’heure récupérée.
- **Automatiser le dessin** Comment faire pour que l’animation se déroule automatiquement et se mette à jour toutes les X secondes/minutes selon votre choix ?
- **Gérer les rafraîchissements** Que se passe-t-il si on rafraîchit la page ? Comment faire en sorte que le dessin soit conservé ? Une fois cela fait, comment offrir la possibilité de le remettre à zéro ?

<aside>
👀 Pour commencer à utiliser les commandes git dans le cadre d’un projet partagé avec votre groupe, vous avez deux choix

- [Je débute] J’utilise une interface graphique pour visualiser les commandes (par exemple [GitDesktop](https://desktop.github.com/) ou [SourceTree](https://www.sourcetreeapp.com/))
- Utiliser les lignes de commande git

Vous trouverez ci dessous des ressources et des exercices pour vous familiariser pas à pas avec git. Il s’agit d’un outil très important qui vous permettra de travailler en équipe à l’école et en entreprise, et vous avez toute l’année pour devenir des experts·es git 🏂

</aside>

# Je suis à l'aise

_Dans ce cas de figure, la connexion à une source de données externe pourrait aussi bien se faire du côté du navigateur que du côté du serveur_

## **Option 1. Se connecter à une API**

Choisir parmi les APIs disponibles sur Internet une source de données à laquelle se connecter, et gérer l’affichage et la mise à jour de votre visualisation en temps réel sur la base des données renvoyées par l’API

**Objectifs pédagogiques**

- Appréhender la notion d’API, et la façon d’interagir avec
- Comprendre l’impact de vos choix d’architecture sur l’utilisation de votre applicatif
- Faire un travail d’équipe pour rechercher et comparer les APIs possibles à utiliser pour ce projet
- Travailler en équipe pour se découper les tâches à effectuer pour mener à bien le projet

**Exemples**

- Se connecter à une API météo et dessiner un paysage plus ou moins ensoleillé en fonction des résultats
- Se connecter à une API de transports et faire changer de couleur un feu de signalisation selon l’état du trafic

<aside>
💡 Certaines APIs sont privées et demandent une authentification (par ex les APIs des réseaux sociaux comme Twitter et Instagram). D’autres APIs sont publiques et peuvent être appelées sans authentification. Vous pouvez prendre en considération ce paramètre dans votre choix d’API en fonction du temps que vous souhaitez dédier à la gestion de l’authentification.

</aside>

## **Option 2. Faire du scraping de page web**

Votre visualisation de données peut alternativement utiliser comme source une page web existante : il s’agit alors de comprendre la structure de cette page afin d’en extraire les données qui vous intéressent et les afficher dans votre propre visualisation de données

**Objectifs pédagogiques**

- S’initier au scraping et trouver la meilleure stratégie pour récupérer les données qui vous intéressent
- Appréhender les problématiques de retraitement des données
- Faire des choix d’architecture par rapport à l’objectif
- Expliciter un découpage de tâches cohérent au sein de l’équipe
- Travailler sur des briques de l’applicatif en interface et se concerter sur les échanges à mettre en place entre ces briques

## **Ressources niveau 2**

Pour comprendre la notion d’API :

- [API: Apprendre l’essentiel en 4 min](https://www.youtube.com/watch?v=T0DmHRdtqY0&ab_channel=Cookieconnect%C3%A9) [FR]
- [Introduction aux API](https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Introduction)  [FR]
- [Récupérer des données du serveur](https://developer.mozilla.org/fr/docs/Apprendre/JavaScript/Client-side_web_APIs/Fetching_data) [FR]
- [Adoptez les API REST pour vos projets web](https://openclassrooms.com/fr/courses/6573181-adoptez-les-api-rest-pour-vos-projets-web) [FR] - _6 premières leçons_

Pour “scraper” une page web  :

- [En javascript (avec NodeJS)](https://www.smooth-code.com/articles/scraper-le-web-avec-puppeteer) [FR]
- [En python avec BeautifulSoup](https://python.doctor/page-beautifulsoup-html-parser-python-library-xml) [FR]

# Je veux aller plus loin

## **Option 1. Créer une API**

En utilisant une base de données existante (par exemple, la liste de défibrillateurs disponibles dans des espaces publics à Paris), créer un serveur Web qui mette à disposition celle-ci via une API. Il s’agira donc de pouvoir recevoir des requêtes comprenant par exemple une localisation pour renvoyer ensuite les adresses des deux défibrillateurs les plus proches de cette localisation. Votre API pourra donc être utilisée par n’importe quel applicatif qui lui envoie des requêtes.

## **Option 2. Croiser les données de deux sources différentes pour les afficher**

Créer un serveur qui se connecte à deux sources de données différentes et les croise pour présenter le résultat de ce croisement via une page Web. Par exemple, je cherche à acheter des fleurs d’hibiscus séchées, la page web me renvoie tous les magasins à proximité qui en vendent en les classant par prix (il s’agira alors de se connecter tour à tour à différentes sources de données pour les agréger).

**Objectifs pédagogiques**

- Manipuler des données de sources (et potentiellement de formats) différents
- Designer une API vouée à être publique
- Discuter et décider ensemble du meilleur design pour votre API

## **Ressources niveau 3**

- [Concevoir une API, les grands principes](https://welovedevs.com/fr/articles/api-rest/) [FR]
- [Designer une API REST, en détail](https://blog.octo.com/designer-une-api-rest/) [FR]

# Ressources générales

## Pour se familiariser avec Git:

- [Tutoriel visuel de Git](https://agripongit.vincenttunru.com/) [EN]
- [Jeu open source pour apprendre à utiliser Git](https://ohmygit.org/) [EN]
- [Des exercices en ligne pour gagner en confiance progressivement](https://www.w3schools.com/git/git_exercises.asp) [EN]
- [5 min pour comprendre les gestes quotidiens d’un développeur](https://www.padok.fr/blog/commit-mep-developpeur) [FR]
- [Gérez du code avec Git et Github (OpenClassroom)](https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github/7165703-decouvrez-la-magie-du-controle-de-versions) [FR]
- [Un outil pour trouver la bonne commande git](https://gitexplorer.com/) [EN]
- [Cheatsheet Codecademy pour des opérations de base Git](https://www.codecademy.com/learn/learn-git/modules/learn-git-git-workflow-u/cheatsheet) [EN]

## Pour créer une visualisation de données :

- [Processing en version JavaScript pour dessiner à l’écran](http://processingjs.org) [EN]
- [Snapsvg qui permet d’animer des images vectorielles](http://snapsvg.io) [EN]
- [Inkscape pour créer des images vectorielles](https://inkscape.org/fr/) [FR]
- [D3.js pour la visualisation de données](https://d3js.org/) [EN]

## Liste d’APIs facilement utilisables

Nous vous recommandons d’utiliser les APIs ci dessous, elles sont bien documentées et ont toujours une équipe de support qui se charge de les maintenir.

- https://www.boredapi.com/
- https://randomuser.me/
- https://newsapi.org/
- https://github.com/lukePeavey/quotable (url publique: [api.quotable.io](http://api.quotable.io/) ie: https://api.quotable.io/random)
- https://jsonplaceholder.typicode.com/
- https://superheroapi.com/
- https://pokeapi.co/docs/v2
- https://world.openfoodfacts.org/data (avec la documentation https://openfoodfacts.github.io/api-documentation/)

## Autres endroits où aller chercher des données :

- [Une marketplace d’APIs](https://rapidapi.com/hub)
- [Une liste d’APIs ouvertes sans besoin d’inscription](https://github.com/cezary/simple-apis) [EN]
- Données météo avec [wttr.in](https://wttr.in/) [EN] et surtout la documentation de l’API dans le README du [dépôt GitHub](https://github.com/chubin/wttr.in) [EN]
- Toutes les [données ouvertes officielles françaises](https://www.data.gouv.fr/fr/), [belges](https://data.gov.be/fr), [québécoises](https://www.donneesquebec.ca/fr/), [allemandes](https://www.govdata.de/), de [Nantes](https://data.nantesmetropole.fr/), de [Paris](https://opendata.paris.fr/)…
- [Données ouvertes des transports publics](https://transport.data.gouv.fr/) en France
- Données cartographiques avec [OpenStreetMap](https://www.openstreetmap.org/) [EN], et surtout la [documentation de l’API](https://wiki.openstreetmap.org/wiki/API_v0.6) [EN]
- Données ouvertes de la [NASA 1](https://open.nasa.gov/open-data/) [EN]

## [Pour aller plus loin] CORS

- [Introduction au CORS](https://www.invivoo.com/en/introduction-to-cors-definition/)
- [CORS en quelques mots](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/cross-origin-resource-sharing/)
