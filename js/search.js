function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("input-wrapper");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length > 0) {
            a[i].style.display = "block";
            input.className = "active";
        } 
        else {
            a[i].style.display = "none";
            input.className = "";
        }
    }
}