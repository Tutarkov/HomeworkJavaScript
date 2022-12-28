let dog = {
 name: "Arci",
 kind: "Sharko",

 dogSpeak : function(){
   return this.name + " " +"Says: `Hey bro!!!`";
 }

}
document.getElementById("speak").innerHTML = dog.dogSpeak();

// Bonus

let kutre = {
    ime: prompt("Vnesi ime na kutre"),
    rasa: prompt("Vnesi rasa na kutre"),

    speak : function(){
        return this.ime + " " +"Says: `Hey bro!!!`";
      }

}
document.getElementById("bonus").innerHTML = kutre.speak();