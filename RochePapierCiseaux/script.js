function jouer(choixJoueur){
  var choixOrdinateur = ordinateur();
  document.getElementById("choixPersonne").innerHTML="Tu a choisi: " + choixJoueur + "!";
  comparer(choixJoueur, choixOrdinateur);
}

function ordinateur(){
    var chiffreHasard = Math.floor(Math.random() * 3);
    var instruments = ["roche", "papier", "ciseaux"];
    var choix = instruments[chiffreHasard];
    document.getElementById("choixOrdi").innerHTML= "L'ordinateur a choisi: " +  choix;
    if (choix == "roche"){
      document.getElementById("attenteDeChoixOrdinateur").src = "assets/rock1.png";
    }
    if (choix == "papier"){
      document.getElementById("attenteDeChoixOrdinateur").src = "assets/paper1.png";
    }
    if (choix == "ciseaux"){
      document.getElementById("attenteDeChoixOrdinateur").src = "assets/scissors1.png";
    }
    return choix;
  }
 
function comparer(choixJoueur, choixOrdinateur) {
    if (choixJoueur == choixOrdinateur){
      document.getElementById("result").innerHTML = "Le résultat est nul, essayez à nouveau!";
      document.getElementById("resultPhoto").src = "assets/tie.png";
    }

    else if (choixJoueur == "roche"){      
      if (choixOrdinateur == "ciseaux"){
        document.getElementById("result").innerHTML = "roche bat ciseaux, tu gagne!";
        document.getElementById("resultPhoto").src = "assets/winner.png";
      }
      else{
        document.getElementById("result").innerHTML = "papier bat roche, l'ordinateur gagne!"; 
        document.getElementById("resultPhoto").src = "assets/loser.png";
      }
    }
  
    else if (choixJoueur == "papier"){
      if (choixOrdinateur == "roche"){
        document.getElementById("result").innerHTML = "papier bat roche, tu gagne!";
        document.getElementById("resultPhoto").src = "assets/winner.png";
      }
      else{
        document.getElementById("result").innerHTML = "ciseaux bat papier, l'ordinateur gagne!"; 
        document.getElementById("resultPhoto").src = "assets/loser.png";
      }
    }
  
    else{
      if (choixOrdinateur == "papier"){
        document.getElementById("result").innerHTML = "ciseaux bat papier, tu gagne!";
        document.getElementById("resultPhoto").src = "assets/winner.png";
      }
      else{
        document.getElementById("result").innerHTML = "roche bat ciseaux, l'ordinateur gagne!"; 
        document.getElementById("resultPhoto").src = "assets/loser.png";
      }
    }

  }
  

  

  

  