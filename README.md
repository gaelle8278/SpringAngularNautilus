# Nautilus

Construction d'un projet qui inclut un backend en SpringBoot et un frontend Angular.

Pour le développement chaque partie reste dans des dossiers qui lui sont propres. Ceci afin d'etre compatible au maximum avec le processus de base, la chaîne d'outils habituelle, de chaque framework.
Les modifications supplémentaires peuvent être facilement apportées et une séparation éventuelle des deux bases de code sera simple.

Le processus de build de l'application Java (SpringBoot) doit intégrer la mise en place aux bons endroits des fichiers produits par Angular 

Pour cela l'écosystème Maven est utilisé. Les plugins suivants sont utilisés :

* exec-maven-plugin: pour exécuter le build Angular avec la commande ng build, ce plugin est appelé à la phase prepare-package de Maven une fois que les sources Java sont compilées. 
Cela génère les fichiers statiques dans le dossier frontend/dist.
* maven-resources-plugin: après la génération des fichiers statiques, le plugin ressources copie les fichiers produits par Angular dans le dossier des fichiers statiques de SpringBoot et assure leur inclusion dans le jar cible, du dossier target
* maven-clean-plugin: plugin utilisé pour nettoyer les fichiers statiques du projet Spring Boot durant la phase clean de Maven.

# Base fonctionnelle du projet

Gestion des livres d'une bibliothèque personnelle

# Roadmap

Formulaire pour ajouter un livre
Liste des livres
Recherche
Composant pour afficher avec Graphiz

# Technologies à tester avec le projet

- Authentification oAuth 
