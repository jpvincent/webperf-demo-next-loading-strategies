Dans le cadre de la formation Webperf - focus JS, spécialisé React, ceci est une démo des différentes stratégies de chargement de fichiers JS implémentées par Next d'une part, et du chargement dynamique de composant d'autre part.

Créé à partir de [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Commandes utiles

- Après récupération du projet, `npm install`
- Pour voir la première démo sur les chargements classiques de JS : `npm run build` puis `npm start`
- Pour éditer le TP sur le chargement dynamique de composants : `npm run dev` pour commencer, mais il faudra bien vérifier avec `npm run build` et `npm start`

## Objectifs

Pour les stratégies de chargement : regarder la console voir quand les scripts sont exécutés.

Pour le chargement dynamique de composant : regarder le poids des JS/CSS chargés
- avant react-datepicker,
- après son ajout,
- puis après l'utilisation de `import()` + `dynamic()` + une condition d'affichage

Le poids se voit dans l'onglet "network" et grâce à la commande `npm run build:analyze`
