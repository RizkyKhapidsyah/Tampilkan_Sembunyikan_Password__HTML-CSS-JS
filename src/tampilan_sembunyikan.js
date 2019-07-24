function ShowPassword()
{
	if(document.getElementById("mypass").value!="")
	{
		document.getElementById("mypass").type="text";
		document.getElementById("show").style.display="none";
		document.getElementById("hide").style.display="block";
	}
}

function HidePassword()
{
	if(document.getElementById("mypass").type == "text")
	{
		document.getElementById("mypass").type="password"
		document.getElementById("show").style.display="block";
		document.getElementById("hide").style.display="none";
	}
}