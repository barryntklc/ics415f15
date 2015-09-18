/**
 * Created by Chunmeista on 9/17/2015.
 */
window.onload = function(a) {
    displayElement();
}

function formArray() {
    return location.search.slice(1).split('&');
}

function displayElement() {
    var html = document.createElement("table");

    var x = formArray();

    for (a in x) {
        var h = document.createElement("tr");

        var s = x[a];
        var e = s.split('=');

        for (b in e) {
            var a3 = document.createElement("td"); //creates td element
            a3.appendChild(document.createTextNode(e[b])); //creates text node from data, and appends it to cell
            a3.style.backgroundColor = "white"; //sets style to white bg
            a3.style.padding = "10px";          //sets style to 10px padding
            a3.style.border = "1px solid black";//sets border to 1px solid black
            h.appendChild(a3);                  //appends td element to row
        }

        html.appendChild(h); //appends row to table
    }

    var target = document.getElementById("text_here");
    target.appendChild(html);
}

