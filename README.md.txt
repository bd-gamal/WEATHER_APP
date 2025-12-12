🌤️ Today Weather (Application Météo)
Une application web simple et élégante permettant de consulter les conditions météorologiques en temps réel pour n'importe quelle ville dans le monde. L'application dispose d'une interface responsive et d'un mode jour/nuit dynamique.

📋 Description du Projet
Ce projet a été développé en utilisant HTML, CSS et JavaScript. Il interagit avec l'API OpenWeatherMap pour récupérer les données.

Fonctionnalités principales :

Recherche de ville : Entrez le nom d'une ville pour obtenir la météo actuelle.

Données en temps réel : Affiche la température, l'humidité et une description du ciel.

Icônes dynamiques : L'icône change en fonction des conditions météo (nuageux, ensoleillé, pluie, etc.).

Mode Sombre / Mode Clair : Un bouton permet de basculer entre un thème jour et un thème nuit, modifiant l'arrière-plan et les couleurs de l'interface.

Design Responsive : L'interface s'adapte aux écrans d'ordinateurs et aux mobiles (style "Glassmorphism").

Gestion des erreurs : Affiche un message si la ville n'est pas trouvée.

🛠️ Technologies Utilisées

HTML5 : Structure de la page.

CSS3 : Mise en page (Flexbox), animations et design adaptatif.

JavaScript (ES6+) : Logique de l'application, manipulation du DOM et requêtes API (Fetch).

Font Awesome : Pour les icônes (soleil, lune, loupe, etc.).

Google Fonts : Police "Poppins".

⚙️ Instructions pour l'API Key
Ce projet nécessite une clé API provenant d'OpenWeatherMap pour fonctionner correctement.

1. Obtenir une clé API
Rendez-vous sur OpenWeatherMap.

Créez un compte gratuit (Sign Up) ou connectez-vous.

Allez dans la section "My API keys".

Copiez votre clé API unique.

2. Configurer la clé dans le projet
Ouvrez le fichier script.js situé à la racine du projet.

Repérez la ligne 1 où la variable apiKey est définie.

Remplacez la valeur existante par votre propre clé entre les guillemets :

 1       const apiKey = "VOTRE_CLE_API_ICI"; 

 2       const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


🚀 Guide de Lancement
Aucune installation complexe (comme Node.js ou npm) n'est nécessaire pour ce projet, car il utilise du JavaScript natif (Vanilla JS).

Option 1 : Lancement direct
Assurez-vous d'avoir téléchargé tous les fichiers (index.html, style.css, script.js) dans le même dossier.

Double-cliquez simplement sur le fichier index.html.

L'application s'ouvrira dans votre navigateur web par défaut.

Option 2 : Via VS Code (Recommandé)
Si vous utilisez Visual Studio Code :

Installez l'extension "Live Server".

Faites un clic droit sur le fichier index.html.

Sélectionnez "Open with Live Server".

Cela lancera un serveur local et rechargera automatiquement la page à chaque modification du code.