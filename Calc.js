function affiche(number){
    document.getElementById("zone").innerText+=number;
}

function supprime(){
    document.getElementById("zone").innerText=" ";

}

function result(){
    var calcul=document.getElementById("zone").innerText;
    supprime();
    var resultat=eval(calcul);
    document.getElementById("result").innerText=resultat;
}

class BaseCalculator{
    constructor(){
        //la liste solution sert à différencier le cas où l'on back depuis un résultat ou depuis un calcul en cours
        this.actions=[];
        this.solution=[];
    }
    affiche(number) {
        //on ajoute chaque élément dans la liste actions
        document.getElementById("zone").innerText += number;
        if(this.actions.length==0){
            //Si on commence un nouveau calcul (la zone d'écriture est vide), on oublie l'ancien résultat
            this.solution=[];
        }
        this.actions.push(number);
        
    }
    supprime() {
        //on vide les 2 listes
        document.getElementById("zone").innerText = " ";
        var reset= " ";
        document.getElementById("result").innerText=" ";
        this.actions=[];
        this.solution=[];
    }
    result() {
        //on sauvegarde le calcul dans solution et on reset actions
        var calcul = document.getElementById("zone").innerText;
        document.getElementById("zone").innerText = " ";
        document.getElementById("result").innerText= " ";
        var resultat = eval(calcul);
        this.resultat=resultat;
        document.getElementById("result").innerText = calcul + "=" + resultat;
        this.solution=this.actions;
        this.actions=[];
    }
    back(){
        //si on revient depuis un calcul on enlève le dernier élement et on actualise
        if(this.solution.length==0){
            this.actions.pop();
            var taille=this.actions.length;
            document.getElementById("zone").innerText = " ";
            for (var i=0;i<taille;i++){// on ne peut pas réutiliser affiche() car sinon actions aura le calcul en double
                document.getElementById("zone").innerText += this.actions[i];
            }
        }
        else{//si on revient depuis la solution on récupère le calcul et on l'affiche
            this.actions=this.solution; 
            console.log(this.actions);
            var taille2=this.actions.length;
            for (var i=0;i<taille2;i++){// on ne peut pas réutiliser affiche() car sinon actions aura le calcul en double
                document.getElementById("zone").innerText += this.actions[i];
            }
            this.solution=[];
        }
    }
    save(){
        document.getElementById("zone").innerText += this.resultat;
        this.actions.push(this.resultat);
    }
}

let calculator= new BaseCalculator();