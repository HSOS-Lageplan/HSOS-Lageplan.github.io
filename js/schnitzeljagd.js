// set game progress to start if new
if(localStorage.getItem("progress" == null)) {
    localStorage.setItem("progress", "0");
}
else {
    var progress = localStorage.getItem("progress");
    applyProgress(progress);
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
            localStorage.setItem("progress", id + 1);
            applyProgress(localStorage.getItem("progress"));
        }
    }
}

function applyProgress(progress) {
    var qa = document.getElementsByClassName("question-answer");

    for (let i = 0; i <= progress; i++) {
        qa[i].className = qa[i].className + " active";
    }

    var a = document.getElementsByClassName("answer");

    for (let i = 0; i < progress; i++) {
        a[i].className = a[i].className + " correct";
        a[i].readOnly = true;
        a[i].value = getAnswers(i)[0];
    }
}

