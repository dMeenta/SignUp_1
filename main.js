function SignUp(){
    var user = document.getElementById("txtuser").value;
    var email = document.getElementById("txtemail").value;
    var password = document.getElementById("txtpsswd").value;
    var texto;
    if(user === "" || email === "" || password === undefined){
        texto = 'Inserte algo en los campos por favor :(';
    }else{
        texto = 'Gracias por probar el formulario\nRealmente solo muestra los datos ingresados :)\n- Usuario: '+user+'\n- Correo: '+email+'\n- Contraseña: '+password;
    }
    alert(texto);   
}