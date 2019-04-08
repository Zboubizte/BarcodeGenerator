var QRCodeDiv = null;

function assignQRCodeDiv(divName) {
    var select = document.getElementById("taille").selectedIndex;
	var options = document.getElementById("taille").options;
	var x = 0;

	switch(options[select].text) {
		case '100*100':
			x = 100;
			break;
		case '200*200':
			x = 200;
			break;
		case '300*300':
			x = 300;
			break;
		case '500*500':
			x = 500;
			break;
		case '1000*1000':
			x = 1000;
			break;
	}

	document.getElementById(divName).innerHTML = "";

	QRCodeDiv = new QRCode(document.getElementById(divName), {
		width : x,
		height : x
	});

	createQRCode();
}

function createQRCode() {
	QRCodeDiv.clear();

	var select = document.getElementById("type").selectedIndex;
    var options = document.getElementById("type").options;

	switch(options[select].text) {
		case 'e-mail':
			if (document.getElementById("texte").value.length != 0) {
				createMailQRCode(document.getElementById("texte").value);
			}
			break;

		case 'SMS':
			if (document.getElementById("texte").value.length != 0) {
				createSMSQRCode(document.getElementById("texte").value);
			}
            break;

		case 'Texte':
			if (document.getElementById("texte").value.length != 0) {
				createTextQRCode(document.getElementById("texte").value);
			}
			break;

		case 'Téléphone':
			if (document.getElementById("texte").value.length != 0) {
				createTelQRCode(document.getElementById("texte").value);
			}
			break;

		case 'URL':
			if (document.getElementById("texte").value.length != 0) {
				createTextQRCode(document.getElementById("texte").value);
			}
			break;

		case 'Contact':
			if (document.getElementById("ctNom").value.length != 0 && document.getElementById("ctPrenom").value.length != 0 && document.getElementById("ctNumero").value.length != 0) {
					createContactQRCode(document.getElementById("ctPrenom").value, document.getElementById("ctNom").value, document.getElementById("ctNumero").value);
			}
			break;
    }
}

function createTextQRCode(text) {
	QRCodeDiv.makeCode(text);
}

function createMailQRCode(text) {
	QRCodeDiv.makeCode("mailto:" + text);
}

function createTelQRCode(text) {
	QRCodeDiv.makeCode("tel:" + text);
}

function createSMSQRCode(text) {
	QRCodeDiv.makeCode("sms:" + text);
}

function createContactQRCode(prenom, nom, num) {
	createContactQRCode("", prenom, nom, "", "", "", "", "", num, "");
}

function createContactQRCode(type, firstname, surname, address, town, zipcode, country, email, tel, bday) {
	QRCodeDiv.makeCode(type + ":" + surname + "," + firstname + ";ADR:" + address + "," + town + "," + zipcode + "," + country + ";EMAIL:" + email + ";TEL:" + tel + ";BDAY:" + bday + ";;");
}

function createGeoQRCode(lat, long, alt) {
	QRCodeDiv.makeCode("geo:" + lat + "," + long + "," + alt);
}

function createWifiQRCode(name, password, encType) {
	QRCodeDiv.makeCode("WIFI:S:" + name + ";T:" + encType + ";P:" + password + ";;");
}