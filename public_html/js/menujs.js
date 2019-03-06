function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("menusuperior").style.marginLeft = "250px";    
  document.getElementById("menusuperiorext").style.marginLeft = "250px";
  document.getElementById("fila1").style.marginLeft = "250px";    
  document.getElementById("fila2").style.marginLeft = "250px";    
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("menusuperior").style.marginLeft= "0";
  document.getElementById("menusuperiorext").style.marginLeft= "0";
  document.getElementById("fila1").style.marginLeft= "0";
  document.getElementById("fila2").style.marginLeft= "0";
}

function abrirMenuExt() {
  document.getElementById("menusuperiorext").style.display="block";
}
function ocultarMenuExt() {
    document.getElementById("menusuperiorext").style.display="none";
}

