// JavaScript Document

function mostra_contato()
	{
		document.getElementById('contato').style.display="block";
		document.getElementById('parceiros').style.display="none";
		document.getElementById('empresa').style.display="none";
		document.getElementById('seguranca').style.display="none";
		document.getElementById('principios').style.display="none";
		document.getElementById('home').style.display="none";
		
	}
	
function mostra_parceiros()
    {
		document.getElementById('parceiros').style.display="block";
		document.getElementById('contato').style.display="none";
		document.getElementById('empresa').style.display="none";
		document.getElementById('seguranca').style.display="none";
		document.getElementById('principios').style.display="none";
		document.getElementById('home').style.display="none";
	}
	
function mostra_empresa()
    {
		document.getElementById('parceiros').style.display="none";
		document.getElementById('contato').style.display="none";
		document.getElementById('seguranca').style.display="none";
		document.getElementById('principios').style.display="none";
		document.getElementById('empresa').style.display="block";
		document.getElementById('home').style.display="none";
		
	}
function mostra_seguranca()
	{
		document.getElementById('parceiros').style.display="none";
		document.getElementById('contato').style.display="none";
		document.getElementById('empresa').style.display="none";
		document.getElementById('principios').style.display="none";
		document.getElementById('seguranca').style.display="block";
		document.getElementById('home').style.display="none";
	}
	
function mostra_principios()
	{
		document.getElementById('parceiros').style.display="none";
		document.getElementById('contato').style.display="none";
		document.getElementById('empresa').style.display="none";
		document.getElementById('seguranca').style.display="none";
		document.getElementById('principios').style.display="block";
		document.getElementById('home').style.display="none";
	}