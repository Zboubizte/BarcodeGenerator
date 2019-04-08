# Documentation

### Technologie 

Les codes QR peuvent contenir des adresses web, du texte, des numéros de téléphone, des mots de passe Wi-Fi, des SMS ou autres types de données comme le format vCard (permet l'ajout rapide d'un contact), lisibles par les smartphones et les téléphones mobiles équipés d'une application de lecture .

L'avantage du code QR est sa facilité et sa rapidité d'utilisation et de création.

Pour lire un code QR, il suffit de lancer l'application de lecture et viser le code dans le mobile.
De nombreuses pages Web offrent ces applications pour mobiles, généralement sans frais.

### Langage et Library

Le container web a été créée en HTML. Et L'implémentation de la librairie QrCode a été faite en javascript. 

### Interface

L'interface web comportera deux entrées:
    - Le type(Adresse, texte, numéro, mot de passe, sms, etc)
    - Le message qui sera transposé en Qrcode
La sortie correspondra à une image Qrcode correspondant aux deux entrées.
Le tout est englobé dans un container html pour la modularité.
   

### Fonction

La première fonction appelée est createCode qui en fonction du format de l’entrée(Mail, message, clé wifi, etc...), il y aura une référence mise en début du string utilisé pour le Qr code: 

    Exemple: Type <Mail> Entrée "br.ch@mail.com" => “mail to:” + Entrée.

L’entrée après avoir été référencée passe par la fonction makeCode afin
De créer l’image du Qr code.
Les fonctions et le module sont détaillés dans leur fichier respectif.
