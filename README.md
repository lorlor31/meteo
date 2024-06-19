Absence de clef valide pour faire fonctionner le système. 
Suivez les étapes suivantes:
  
    1/ Cliquez sur le lien "https://home.openweathermap.org/users/sign_in" pour vous connecter à votre compte
	ou https://home.openweathermap.org/users/sign_up pour créer un compte

    2/ Cliquez sur API dans la barre de navigation pour souscrire aux 2 API suivantes : 
	- Current Weather Data 
	- 5 Day / 3 Hour Forecast (prenez l'offre gratuite, ce qui est largement suffisant)
    
    3/ Cliquez sur votre compte (barre de navigation à droite de for business et à gauche de Support) 
    pour faire apparaître un mini-menu et cliquez sur My API keys.

    4/ Récupérez la clé API et la copier dans un fichier de sauvegarde

    5/ Ouvrez le fichier "assets/script/connections.js" puis :
    - Recherchez la constante "appid"
    - Collez votre clé API entre les guillemets
    - Enregistrez le fichier

    6/ Ouvrez le projet dans VScode, installez l'extension Live Server et démarrer le


    Vous pouvez maintenant utiliser l'application.