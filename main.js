
function italique() {
    var getText=document.getElementById('texte');
    if(getText.style.fontStyle!="italic"){
        getText.style.fontStyle="italic";
    }else{
        getText.style.fontStyle="normal";
    };
}

function bold() {
    var getText=document.getElementById('texte');
    if(getText.style.fontWeight!="bold"){
        getText.style.fontWeight="bold";
    }else{
        getText.style.fontWeight="normal";
    };
}

function souligne() {
    var getText=document.getElementById('texte');
    if(getText.style.textDecoration!="underline"){
        getText.style.textDecoration="underline";
    }else{
        getText.style.textDecoration="none";
    };
}


function effacer() {
    document.getElementById('texte').value = "";
}

function changercouleur() {
        document.getElementById("texte").style.color = document.getElementById('color').value;
    }

function changersize() {
        document.getElementById("texte").style.fontSize = document.getElementById('size').value +'px';
    }

 function changerfont() { 
        document.getElementById("texte").style.fontFamily = document.getElementById('font').value;
    }

    $(document).ready(function(){
        $(".container-fluid #main div .row .col-sm-4").hover(function(){
            $(this).fadeTo("opacity",0.5);
            $(this).find("button").fadeTo("opacity","100");
        },
        function(){
            $(this).fadeTo("opacity",1);
            $(this).find("button").fadeTo("opacity","0");
        } 
        )
    });