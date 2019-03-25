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
                    //return false;
}
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
                    //return false;
		}	
if (duvidas.length > 2) {
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
if (erro == false) {
                                $.notify("Cadastrado com sucesso!", "success");
                            return false;
}
return false;
}

