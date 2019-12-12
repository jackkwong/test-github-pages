var mode = false;

window.addEventListener("load", loadFunctions);

function loadFunctions()
{
	var ai = document.getElementById("menu");
	ai.addEventListener("click", loadAddItemNav, true);
}

function loadAddItemNav()
{
	if(mode)
	{
		document.getElementById("show").className = "";
		mode = false;
		return;
	}

	document.getElementById("show").className += "show";
	mode = true;
}