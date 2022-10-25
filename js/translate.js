const Languages = {
    EN: "en",
    DE: "de"
}

function languageToggle() {
    var currentLanguage = sessionStorage.getItem("currentLanguage");
    if(currentLanguage == Languages.EN || currentLanguage == null) {
        sessionStorage.setItem("currentLanguage", Languages.DE)
    }
    else{
        sessionStorage.setItem("currentLanguage", Languages.EN)
    }

    location.reload();
}

function translate(id) {
    var scriptTag = document.getElementsByTagName('script');
    scriptTag = scriptTag[scriptTag.length - 1];
    var parentTag = scriptTag.parentNode;

    parentTag.innerHTML = translateWithoutScriptHack(id);
}

function translateWithoutScriptHack(id) {
    var currentLanguage = sessionStorage.getItem("currentLanguage")
    if(currentLanguage === Languages.DE || currentLanguage == undefined) {
        return getDeTranslation(id);
    }
    else {
        return getEnTranslation(id);
    }
}

// Translate Page Title
switch (document.title) {
    case "1":
        document.title = translateWithoutScriptHack(1);
        break;
    default:
        console.log("Could not find translation for title: " + document.title);
}