function affiche(number){
    document.getElementById("zone").innerText+=number;
}

function supprime(){
    document.getElementById("zone").innerText=" ";
}

function result(){
    var calcul=document.getElementById("zone").innerText;
    console.log(calcul);
    supprime();
    var resultat=eval(calcul);
    document.getElementById("result").innerText=resultat;
}