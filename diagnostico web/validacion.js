//validación de codigo de inputs
var usuario = document.forms['form']['usuario'];
var contraseña = document.forms['form']['contraseña'];

var usuario_error = document.getElementById('usuario_error');
var contra_error = document.getElementById('contra_error');


function pagina(){
    if(usuario.value!='Daniel'){
        if(usuario.value!='Pedro'){
            if(usuario.value!='Ramon'){
                if(usuario.value!='Jacobo'){
                    usuario.style.border="1px solid red";
                    usuario_error.style.display ="block";
                    usuario.focus();
                }
            } 
        }
        
    }
    
    if(usuario.value =='Daniel' && contraseña.value!='00000'){
            contraseña.style.border="1px solid red";
            contra_error.style.display ="block";
            contraseña.focus();
        }
        if(usuario.value =='Ramon' && contraseña.value!='00001'){
            contraseña.style.border="1px solid red";
            contra_error.style.display ="block";
            contraseña.focus();
        }
        if(usuario.value =='Pedro' && contraseña.value!='00002'){
            contraseña.style.border="1px solid red";
            contra_error.style.display ="block";
            contraseña.focus();
        }
        if(usuario.value =='Jacobo' && contraseña.value!='00003'){
            contraseña.style.border="1px solid red";
            contra_error.style.display ="block";
            contraseña.focus();
        }
    if(usuario.value =='Daniel' && contraseña.value=='00000'){
        window.location.href = "admin.html";
    }
    if(usuario.value =='Ramon' && contraseña.value=='00001'){
        window.location.href = "usuario.html";
    }
    if(usuario.value =='Pedro' && contraseña.value=='00002'){
        window.location.href = "usuario.html";
    }
    if(usuario.value =='Jacobo' && contraseña.value=='00003'){
        window.location.href = "usuario.html"; 
    }
    
}