function validar(){
    var duvidas = $("#duvidas").val();
    var nome = $ ("#nome").val();
    var erro = false;
    //Valida Nome
if (nome.length <=9) {
    $(document).ready(function(){
        $.notify({
         message:"ERRO! Campo Nome deve ter no mínimo 10 caracteres"
    },{
        type: 'danger',
        timer: 2000
});
});

erro =true;
}

//Verifica espaço após nome
if (nome.trim().indexOf(" ") === -1) {
    $.notify({
        message:"Campo nome deve ter um sobrenome!"
    },{
            type:('danger'),
            timer:2000
});
    erro = true;
}

//Valida e-mail
var sEmail	= $("#email").val();
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;		
		if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
			$(document).ready(function(){
        $.notify({
            message:"E-mail inválido!"
    },{
        type: 'danger',
        timer: 2000
});
});
erro =true;
}	

//Valida dúvidas
if (duvidas.length > 400 ) {
$(document).ready(function(){
    $.notify({
        message:"Campo duvidas excede 400 caracteres"
    },{
        type: 'danger',
        timer: 2000
});
});
erro =true;
}
if (duvidas.length < 1 ) {
$(document).ready(function(){
    $.notify({
        message:"Campo duvidas está em branco"
    },{
        type: 'danger',
        timer: 2000
    
});
});
erro =true;
}

//Envia fomulário e gera msg
if (erro === false) {
    $.notify("Dúvida enviada com sucesso!", "success");
}
return false;
}