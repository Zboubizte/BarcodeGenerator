# QR Code Generator

## Technologie

Les codes QR peuvent contenir des adresses web, du texte, des numéros de téléphone, des mots de passe Wi-Fi, des SMS ou autres types de données comme le format vCard (permet l'ajout rapide d'un contact), lisibles par les smartphones et les téléphones mobiles équipés d'une application de lecture.

L'avantage du code QR est sa facilité et sa rapidité d'utilisation et de création.

Pour lire un code QR, il suffit de lancer l'application de lecture et viser le code avec son mobile.
De nombreuses pages web offrent ces applications pour mobiles, généralement sans frais.

## Langage et Library

Le container web a été créée en HTML. Et L'implémentation de la librairie QR Code a été faite en javascript.

## Interface

L'interface web comportera trois entrées:

- La taille du QR Code en pixels (100, 200, 300, 500 ou 1000)

- Le type (Adresse, texte, numéro de téléphone, SMS, etc)

- Les paramètres qui seront transposés en QR Code

La sortie correspondra à une image QR Code correspondant à ces entrées.
Le tout est englobé dans un container html pour la modularité.

## Utilisation "tel quel"

Copiez les fichiers correspondants dans votre projet et copiez le code contenu dans _index.html_ afin de l'inclure sur votre page web

## Utilisation "avancée"

### Fichiers

Il faut inclure les fichiers suivants à votre page :

```html
<script src="QR/js/jquery.min.js"></script>
<script src="QR/js/qrcode.min.js"></script>
<script src="QR/js/qrcodeApplication.js"></script>
<script src="QR/js/script.js"></script>
```

### Méthodes

La méthode assignQRCodeDiv(_divid_) permet de lier le résultat de votre code QR à une div et de changer la taille de sortie de votre code QR à la volée. La méthode selectChange() permet de changer le type de code QR en fonction de la valeur de l'élément html _#type_ :

```javascript
assignQRCodeDiv("display");
selectChange();
```

Il faut donc appeler la fonction assignQRCodeDiv(_divid_) après chargement de la page web et la lier à votre bouton permettant de changer de taille si vous le souhaitez.

La méthode createQRCode() est à lier au bouton permettant de crééer le code QR.

### Classes

La classe _.test_ est à utiliser avec les données simples (un champ).

La classe _.autre_ est à utiliser avec les données nécessitant deux champs.

La classe _.ct_ est à utiliser avec les données nécessitant trois champs.

A vous de faire les autres pour plus de champs !

## Fonction

La première fonction appelée est createQRCode() qui en fonction du format de l’entrée (Mail, message, contact, etc...), aura une référence mise en début du string utilisé pour le QR Code:

    Exemple: Type <Mail> Entrée "monsieur.dupont@mail.com" => “mail to:” + Entrée.

L’entrée après avoir été référencée passe par la fonction makeCode afin de créer le QR Code correspondant.
Les fonctions et le module sont détaillés dans leur fichier respectif.
