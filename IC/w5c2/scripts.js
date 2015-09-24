/**
 * Created by Chunmeista on 9/22/2015.
 */

$(document).ready(function () {

    //$('.div1').hide();

    //$('.box').hide();


});

$(function () {
    /*
     $('.box').mouseenter(function () {
     $(this).style.backgroundColor = "blue";
     },
     function () {
     $(this).style.backgroundColor = "white";
     });
     */

    $('.box').mouseenter(function () {
        $(this).css('background-color', '#ff8784');
        $(this).css('font-weight', 'bold');
        $(this).css('font-family', 'cursive');
    });

    $('.box').mouseleave(function () {
        $(this).css('background-color', 'white');
        $(this).css('font-weight', '');
        $(this).css('font-style', '');
    });

    $('#animated').mouseenter(function () {
        console.log("test");
        $('#animated').animate({
            right: '250px'
        });
    });

    $('.content').mouseenter(function () {
        console.log("mouseenter called!");
        $(this).load("testcontent.html");
    });

    $('.content').mouseleave(function () {
        console.log("mouseleave called!");
        $(this).unload();
    });

    $('#strobe').mouseenter(function () {
        $(this).css('background-color', '#ff8784');
        $(this).css('font-weight', 'bold');
        $(this).css('font-family', 'cursive');
        $(this).hide();
    });

    $('#strobe').mouseleave(function () {
        $(this).css('background-color', 'white');
        $(this).css('font-weight', '');
        $(this).css('font-style', '');
        $(this).show();
    });

});