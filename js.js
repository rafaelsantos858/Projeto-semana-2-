

function mudarCorDoSite() {
    
    var muda = document.getElementById("main");
    if (muda.className.includes("bg1")) {
        muda.classList = "bg2";
    }
     else {
        muda.classList = "bg1";     
     }


     var footer = document.getElementById("footer");
    if (footer.className.includes("footer-primario")) {
        footer.classList = "footer-secundario";
    }
     else {
        footer.classList = "footer-primario"; 
     }

 }