const btn = document.getElementById('btn-iniciar');
let correo = "correo";
let pass = "pass"

btn.onclick = () =>{
    correo = document.getElementById('correo').value;
    pass = document.getElementById('password').value;
    if(correo == "admin" && pass == "admin"){
        window.location.href = 'home.html'
    }else{
        alert("Datos inválidos, reinténtalo por favor");
    }
    

}

const btnnew = document.getElementById('btnnew');

btnnew.onclick = () =>{
  window.location.href = 'registro.html';
}

