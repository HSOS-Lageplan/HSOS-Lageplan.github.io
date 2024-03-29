var inputs = document.getElementsByClassName("answer");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            inputs[i].className = "answer incorrect";
        }
    });
}

if(localStorage.getItem("progress") == null) {
    localStorage.setItem("skipCounter", "0");
    activateWelcomeMessage();
    deactivateCongratulations();
    deactivateBuildings();
    applyProgress(localStorage.getItem("progress"));
} else if (localStorage.getItem("progress") == 16){
    document.getElementById("congratulations-message").className = "active";
}
else {
    applyProgress(localStorage.getItem("progress"));
    deactivateCongratulations();
    deactivateBuildings();
}

function toggleSidebar() {
    var ele = document.getElementById("question-window");

    if(ele.className == "active") {
        ele.className = "";
    }
    else {
        ele.className = "active";
    }
}

function checkAnswer(id) {
    var ele = document.getElementsByClassName("answer");
    var icon = document.getElementsByClassName("fa-check");
    ele = ele[id];
    icon = icon[id];

    var answers = getAnswers(id);

    for (let i = 0; i < answers.length; i++) {
        if(answers[i].toUpperCase() === ele.value.toUpperCase()) {
            ele.className = "answer correct";
            icon.className = icon.className + " visible";
            ele.readOnly = true;
            localStorage.setItem("progress", id + 1);
            if(localStorage.getItem("progress") < 16){
            applyProgress(localStorage.getItem("progress"));
            }
            if((id + 1) == 16){
              activateCongratulations();
            }
        }
    }
}

function applyProgress(progress) {
    var qa = document.getElementsByClassName("question-answer");

    for (let i = 0; i < qa.length; i++) {
        setBuildingColor(i, false);
    }

    for (let i = 0; i <= progress; i++) {
      if(i < 16){
        qa[i].className = "question-answer" + " active";
      }
    }

    var a = document.getElementsByClassName("answer");
    var icon = document.getElementsByClassName("fa-check");
    var currentLanguage = sessionStorage.getItem("currentLanguage");

    for (let i = 0; i < progress; i++) {

        a[i].className = "answer" + " correct";
        icon[i].className = icon[i].className + " visible";
        a[i].readOnly = true;
        checkAnswerTranslation(a,i,currentLanguage); // Bei Frage 2,7 und 15 guckt die Funktion nach, in welcher Sprache wir uns befinden, dem entsprechend wird es für DE/EN translatet.
        setBuildingColor(i, true);
    }
}

function checkAnswerTranslation(a,i,currentLanguage){

    var currentLanguage = sessionStorage.getItem("currentLanguage");

    if(i==1 && (currentLanguage === Languages.DE || currentLanguage == undefined)){
        a[i].value = getAnswers(i)[0];
    }else if(i==1 && currentLanguage === Languages.EN){
        a[i].value = getAnswers(i)[2];
    }
    else if(i==6 && (currentLanguage === Languages.DE || currentLanguage == undefined)){
        a[i].value = getAnswers(i)[0];
    }else if(i==6 && currentLanguage === Languages.EN){
        a[i].value = getAnswers(i)[2];
    }
    else if(i==14 && (currentLanguage === Languages.DE || currentLanguage == undefined)){
        a[i].value = getAnswers(i)[0];
    }else if(i==14 && currentLanguage === Languages.EN){
        a[i].value = getAnswers(i)[2];
    }
    else{
        a[i].value = getAnswers(i)[0];
    }
}

function activateWelcomeMessage() {
    var ele = document.getElementById("welcome-message");
    ele.className = "active";
}

function deactivateWelcomeMessage() {
    localStorage.setItem("progress", "0");
    var ele = document.getElementById("welcome-message");
    ele.className = "";
}

function activateCongratulations() {
    toggleSidebar();
    document.getElementById("congratulations-message").className = "active";
}

function deactivateCongratulations() {
    document.getElementById("congratulations-message").className = "";
}

function getPrice(username) {
  deactivateCongratulations();
  var x = document.getElementById("price");
  x.style.display = "block";
  x.style.backgroundImage = "url('./res/schnitzeljagd/paper.jpg')";
  if (username != null){
    document.getElementById("usernamePrice").innerText = username;
  }
  document.getElementById("skipCounter").innerText = parseInt(localStorage.getItem("skipCounter"));
}

function getUserName() {
    return document.getElementById("username").value;
}

function reset() {
    if(confirm(translateWithoutScriptHack(79))) {
        localStorage.clear();
        var a = document.getElementsByClassName("answer");
        for(i = 0; i < a.length; i++) {
            a[i].value = "";
        }
        location.reload();
    }
}

function skip() {
    localStorage.setItem("skipCounter", parseInt(localStorage.getItem("skipCounter")) + 1);
    applyProgress(parseInt(localStorage.getItem("progress")) + 1);
    localStorage.setItem("progress", parseInt(localStorage.getItem("progress")) + 1)
    if(localStorage.getItem("progress") == 16) {
        activateCongratulations();
    }
}

function deactivateBuildings(){
    BA.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    BB.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    BC.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SN.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SR.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SH.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SJ.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SG.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SK.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    SC.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
    AF.setStyle({fillColor: '#d4d4d4', color: '#aaaaaa'});
}

document.querySelector("#map").addEventListener("click", function() {
    if(document.getElementById("question-window").className == "active") {
        toggleSidebar();
    }
});
