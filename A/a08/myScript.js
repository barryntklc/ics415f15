/**
 * Created by Chunmeista on 9/26/2015.
 */

$(document).ready(function () {
    $('#answer01').hide();
    $('#answer02').hide();
    $('#answer03').hide();
    $('#answer04').hide();
    $('#answer05').hide();
});

function active(elem) {
    var id = "#" + elem.getAttribute('id').replace("question", "answer");

    if ($(id).css('display') === 'none') {
        return false;
    } else {
        return true;
    }
}

$(function () {

    $('.toggle-area').click(function () {

        var id = "#" + this.getAttribute('id').replace("question", "answer");

        if (active(this)) {
            $(this).children().first().removeClass("fa-minus");
            $(this).children().first().addClass("fa-plus");
            $(id).hide();
            $(this).css('background-color', '#d7d7d7');
            $(this).css('color', 'black');
        } else {
            $(this).children().first().removeClass("fa-plus");
            $(this).children().first().addClass("fa-minus");
            $(id).show();
            $(this).css('background-color', '#4772f4');
            $(this).css('color', 'white');
        }
    });

});


window.onload = function(a) {
    displayElement();
}

function formArray() {
    return location.search.slice(1).split('&');
}

function displayElement() {
    var html = document.createElement("table");

    var x = formArray();

    console.log(x);

}
