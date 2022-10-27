// set game progress to start if new
if(localStorage.getItem("progress") == null) {
    localStorage.setItem("progress", "0");
    activateWelcomeMessage();
    deactivateCongratulations();
    applyProgress(localStorage.getItem("progress"));
}
else {
    applyProgress(localStorage.getItem("progress"));
    deactivateCongratulations();
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
            ele.className = ele.className + " correct";
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
        qa[i].className = qa[i].className + " active";
      }
    }

    var a = document.getElementsByClassName("answer");
    var icon = document.getElementsByClassName("fa-check");

    for (let i = 0; i < progress; i++) {
        a[i].className = a[i].className + " correct";
        icon[i].className = icon[i].className + " visible";
        a[i].readOnly = true;
        a[i].value = getAnswers(i)[0]; // muss noch für übersetzungen funktionieren!!!

        setBuildingColor(i, true);
    }
}

function activateWelcomeMessage() {
    var ele = document.getElementById("welcome-message");
    ele.className = "active";
}

function deactivateWelcomeMessage() {
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
    //hier gibt es den Preis
    console.log(username);
}

function getUserName() {
    return document.getElementById("username").value;
}

function reset() {
    if(confirm(translateWithoutScriptHack(79))) {
        localStorage.clear();
        location.reload();
    }
}

function skip() {
    applyProgress(parseInt(localStorage.getItem("progress")) + 1);
    localStorage.setItem("progress", parseInt(localStorage.getItem("progress")) + 1)
}