function validar(){
    var duvidas = $("#duvidas").val();
    var nome = $ ("#nome").val();
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
return false;
}
    /*Valida e-mail
usuario = field.value.substring(0, field.value.indexOf("@"));
dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
if ((usuario.length >=1) &&
    (dominio.length >=3) && 
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&      
    (dominio.indexOf(".") >=1)&& 
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
document.getElementById("email").innerHTML="E-mail válido";
alert("email valido");
}
else{
document.getElementById("email").innerHTML="<font color='red'>Email inválido </font>";
alert("E-mail invalido");}
*/
//Valída duvidas
if (duvidas.length > 2) {
$(document).ready(function(){
    $.notify({
        message:"Campo duvidas excede 400 caracteres"
    },{
    type: 'danger',
    timer: 2000
    
});
});
return false;
}
return true;
}

