function selectChange()
{
    var select = document.getElementById("type").selectedIndex;
    var options = document.getElementById("type").options;

	hideAll();
	
	var type = options[select].text;

    switch(type)
    {
        case 'Contact':
            setDisplay("ct", "block");
            break;

        case 'SMS':
            setDisplay("autre", "block");
            break;

        case 'Texte':
        case 'URL':
        case 'Téléphone':
        case 'e-mail':
            document.getElementById("valeur").innerHTML = type + " :";
            setDisplay("text", "block");
            break;
    }
}

function setDisplay(classe, val)
{
    var tmp = document.getElementsByClassName(classe);

    for (var i = 0; i < tmp.length; i++)
        tmp[i].style.display = val;
}

function hideAll()
{
    setDisplay("text", "none");
    setDisplay("autre", "none");
    setDisplay("ct", "none");
}