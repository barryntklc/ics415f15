/**
 * Created by Chunmeista on 9/15/2015.
 */

function mouseOver(div) {
    div.style.backgroundColor = "#4d9d67";
    div.style.color = "white";
}

function mouseOut(div) {
    div.style.backgroundColor = "";
    div.style.color = "";
}

function home_loc() {
    location.reload();
    location.href='home.html';
}

function login_loc() {
    location.reload();
    location.href='account.html';
}

function browse_loc() {
    location.reload();
    location.href='search.html';
}

function contact_loc() {
    window.open('mailto:barryn.chun@gmail.com');
}