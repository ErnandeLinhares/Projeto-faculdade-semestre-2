// JavaScript Document

function valida_contato(formulario)
	{
		if (formulario.cont_nome.value=="")
		{
			alert("Atenção! O campo nome deve ser preenchido");
			formulario.cont_nome.focus();
			return false;
		}
		else if (formulario.email.value=="")
		{
			alert("Atenção! O campo e-mail deve ser preenchido");
			formulario.email.focus();
			return false;
		}
			else if (formulario.cont_cnpjcpf.value=="")
		{
			alert("Atenção! O campo Cnpj/Cpf deve ser preenchido");
			formulario.cont_cnpjcpf.focus();
			return false;
		}
			else if (formulario.assunto.value=="")
		{
			alert("Atenção! Selecione um Assunto");
			formulario.assunto.focus();
			return false;
		}
			else if (formulario.cont_fone.value=="")
		{
			alert("Atenção! O campo telefone de contato deve ser preenchido");
			formulario.cont_fone.focus();
			return false;
		}
			else if (formulario.mensagem.value=="")
		{
			alert("Atenção! O campo de mensagem deve ser preenchido");
			formulario.mensagem.focus();
			return false;
		}
	}
	
function valida_curriculo(formulario)
	{
		if(formulario.objetivo.value=="")
		{
			alert("Atenção! O campo ojetivo deve ser preenchido");
			formulario.objetivo.focus();
			return false;
		}
		else if(formulario.nome.value=="")
		{
			alert("Atenção! O campo nome deve ser preenchido");
			formulario.nome.focus();
			return false;
		}
		else if(formulario.mail.value=="")
		{
			alert("Atenção! O campo E-mail deve ser preenchido");
			formulario.mail.focus();
			return false;
		}
		else if(formulario.data_nasc.value=="")
		{
			alert("Atenção! O campo data de nascimento deve ser preenchido");
			formulario.data_nasc.focus();
			return false;
		}
		else if(formulario.endereco.value=="")
		{
			alert("Atenção! O campo endereço deve ser preenchido");
			formulario.endereco.focus();
			return false;
		}
		else if(formulario.cep.value=="")
		{
			alert("Atenção! O campo CEP deve ser preenchido");
			formulario.cep.focus();
			return false;
		}
		else if(formulario.bairro.value=="")
		{
			alert("Atenção! O campo bairro deve ser preenchido");
			formulario.bairro.focus();
			return false;
		}
		else if(formulario.cidade.value=="")
		{
			alert("Atenção! O campo cidade deve ser preenchido");
			formulario.cidade.focus();
			return false;
		}
		else if(formulario.fonerec.value=="")
		{
			alert("Atenção! O campo telefone de contato deve ser preenchido");
			formulario.fonerec.focus();
			return false;
		}
		else if(formulario.RG.value=="")
		{
			alert("Atenção! O campo RG deve ser preenchido");
			formulario.RG.focus();
			return false;
		}
		else if(formulario.cpf.value=="")
		{
			alert("Atenção! O campo CPF deve ser preenchido");
			formulario.cpf.focus();
			return false;
		}
		else if(formulario.Res_cnh.value=="S")
		{
			if((formulario.cat_cnh.value=="")||(formulario.num_cnh.value==""))
			{
				alert("Atenção! Você selecionou que possuí carteira de motorista, mas não selecionou a categoria ou não informou o número da CNH. Favor rever!");
				formulario.num_cnh.focus;
				return false;
			}
		}
		else if(formulario.pq_trab.value=="")
		{
			alert("Atenção! O campo Poque deseja trabalhar na Rodoviário Garra deve ser preenchido");
			formulario.pq_trab.focus();
			return false;
		}		
	}
	   
	   

	
		 
  