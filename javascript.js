/*Função que valida o formulario de login */

function validaLogin () {
	// pegar os valores digitados no campo de usuário e senha

	var usuario = document.getElementById("inpuUsuario").value;
	var senha = document.getElementById("inputSenha").value;

	// Verificar se ambos os campos foram preenchidos
	// se foram preenchidos, deixar enviar o formulário

	if(usuario == "" || senha == "") {
		alert("Prencha ambos os campos");
		return false;
	} else {
		alert("Preencheu os campos de forma correta");
		return true;
	}
	//se não, avisa que tem erro e não envia o formuário
}