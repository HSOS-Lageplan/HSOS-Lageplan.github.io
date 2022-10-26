function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("input-wrapper");
    a = div.getElementsByTagName("a");
    var count = 0;
    for (i = 0; i < a.length; i++) {
        searchKeywords = a[i].dataset.searchkeywords || "";
        if (searchKeywords.replace(/\s/g, "").toUpperCase().indexOf(filter) > -1 && filter.length > 0) {
            a[i].style.display = "block";
            count++;
        } 
        else {
            a[i].style.display = "none";
            
        }
    }
    if(count > 0) input.className = "active";
    else input.className = "";
}