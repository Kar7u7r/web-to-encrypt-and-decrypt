    // script para desaparecer imagen y expandir cuadro con el boton de encriptar (temporalmente)
    var bot = document.getElementById("enb");
    var bon = document.getElementById("deb");
    var boc = document.getElementById("copy");
    var tex = document.getElementById("des")
    var tes = document.getElementById("enc")
    //para copiar
    let Img = document.getElementById("jug");
    let pa = document.getElementById("non")
    let cop = document.getElementById("copy")

    let vocales = ["a","i","u","e","o"];
    let pt = "";
    let ps = "";
    let pal = "";

// funcion de encriptacion
    bot.addEventListener("click", miFuncion);

    function miFuncion() {
        pal=""
        // verifica si la funcion esta vacia y verifica cual de los 2 textarea contiene texto para pasar el dato a p
        let p ;
        if (tes.value.trim() !== "") {
            p = tes.value
        }else {
            tex.value = ""
            Img.style.display = "block";
            pa.style.display = "block"
            tex.style.top = "" 
            tex.style.height = "" 
            tex.style.fontSize = "" 
            cop.style.display = ""
            return ;
            }
        if (p==pt){
            return pt
        }
        //inicia la funcion de encriptar
        for (let i = 0; i < p.length; i++){
        if(p[i]==vocales[0]){
            pt += "ai";
        }
        else if(p[i]==vocales[1]){
            pt += "imes";
        }
        else if(p[i]==vocales[2]){
            pt += "ufat";
        }
        else if(p[i]==vocales[3]){
            pt +=  "enter";
        }
        else if(p[i]==vocales[4]){
            pt += "ober";
        }
        else{
            pt += p[i]
        }
        }
        tes.value = pt;
        tex.value = tes.value;
        //desaparecer y agrandar
        Img.style.display = "none";
        pa.style.display ="none"
        tex.style.top = "10%"
        tex.style.height = "70%";
        tex.style.fontSize = "25px"
        cop.style.display = "inline-block";
    }
//funcion de desencriptacion 
    bon.addEventListener("click", miFuncion2);

    function miFuncion2() {

        // verifica  si la funcion esta vacia y verifica cual de los 2 textarea contiene texto para pasar el dato a tp
        let tp;
        if (tes.value.trim() !== "") {
            tp = tes.value
        }else{
            tex.value = ""
            Img.style.display = "block";
            pa.style.display = "block"
            tex.style.top = "" 
            tex.style.height = "" 
            tex.style.fontSize = "" 
            cop.style.display = ""
            return;
        }
        //inicia la funcion de desencriptar
        for(let x = 0; x<tp.length;x++){
                ps += tp[x]
                if((ps=="a")&&(tp[x+1]=="i")){
                    ps=""
                    x=x+1
                    pal += "a"
                }
                if ((ps=="u")&&(tp[x+1] === "f" && tp[x+2] === "a" && tp[x+3] === "t")){
                    ps=""
                    x=x+3
                    pal+="u"
                }
                if ((ps=="i")&&(tp[x+1] === "m" && tp[x+2] === "e" && tp[x+3] === "s")){
                    ps=""
                    x=x+3
                    pal+="i"
                }
                if ((ps=="o")&&(tp[x+1] === "b" && tp[x+2] === "e" && tp[x+3] === "r")){
                    ps=""
                    x=x+3
                    pal+="o"
                }
                if ((ps=="e")&&(tp[x+1] === "n" && tp[x+2] === "t" && tp[x+3] === "e"&& tp[x+4] === "r")){
                    ps=""
                    x=x+4
                    pal+="e"
                }
                else{
                    pal += ps;
                    ps=""
                }
            }
        tes.value = pal;
        tex.value = tes.value;
        pal = ""
        pt = ""
        // desaparecer y agrandar 
        Img.style.display = "none";
        pa.style.display ="none"
        tex.style.top = "10%"
        tex.style.height = "70%";
        tex.style.fontSize = "25px"
        cop.style.display = "inline-block";
    }
    //copiar
     boc.addEventListener('click', () => {
        tex.select();
        document.execCommand('copy');
    });