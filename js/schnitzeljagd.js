// set game progress to start if new
if(sessionStorage.getItem("progress" == null)) {
    sessionStorage.setItem("progress", "0");
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
    ele = ele[id];

    var answers = getAnswers(id);

    for (let i = 0; i < answers.length; i++) {
        if(answers[i].toUpperCase() === ele.value.toUpperCase()) {
            ele.className = ele.className + " correct";
            ele.readOnly = true;
            sessionStorage.setItem("progress", id + 1);
        }     
    }
}

