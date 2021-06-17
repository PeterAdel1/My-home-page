function NewTab() 
{
	window.open("https://www.google.com", "_blank");
}



var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == modal) 
  {
	  modal.style.display = "none";
  }
}



function faceb() 
{
	window.open("https://www.facebook.com", "_blank");
}



function address()
{
	var table = document.getElementById('customers1');
	if (table.style.display == "block") 
	{
  		table.style.display = "none"
	} 
	else 
	{
  		table.style.display = "block";
	}
}



function myswitch() 
{
	var ne = document.getElementById ("rounds")
	var ib = document.getElementById("rel")

	if (ne.checked) 
	{
		ib.style.display = "block"		
	} 
	else 
	{
		ib.style.display ="none"
	}
}



function of() 
{
	var ib = document.getElementById("rel")
	ib.style.display ="block"
}