/**
 * Created by Chunmeista on 9/20/2015.
 */

function getClasses(elem) {
    return elem.getAttribute('class').split(' ');
}

function addClass(elem, className) {
    var buffer = elem.getAttribute('class').split(' ');

    buffer.push(className);

    elem.setAttribute('class', buffer.join(' '));
}

function validateForm() {
    var valid = true;
    var alertMessages = [];

    var username = document.forms['myForm']['username'].value;
    var email = document.forms['myForm']['email'].value;
    var password = document.forms['myForm']['password'].value;
    var confirm = document.forms['myForm']['confirm'].value;

    if (username === null || username.trim() === "") {
        valid = false;
        alertMessages.push("Please enter a username!");
        document.forms['myForm']['username'].style.backgroundColor = "#FF9999";
        document.forms['myForm']['username'].onclick = function() {
            document.forms['myForm']['username'].style.backgroundColor = "";
        }
    }
    if (email === null || email.trim() === "") {
        valid = false;
        alertMessages.push("Please enter an email!");
        document.forms['myForm']['email'].style.backgroundColor = "#FF9999";
        document.forms['myForm']['email'].onclick = function() {
            document.forms['myForm']['email'].style.backgroundColor = "";
        }
    }
    if (password === null || password.trim() === "") {
        valid = false;
        alertMessages.push("Please enter a password!");
        document.forms['myForm']['password'].style.backgroundColor = "#FF9999";
        document.forms['myForm']['password'].onclick = function() {
            document.forms['myForm']['password'].style.backgroundColor = "";
        }
    }
    if (confirm === null || confirm.trim() === "") {
        valid = false;
        alertMessages.push("Please confirm your password!");
        document.forms['myForm']['confirm'].style.backgroundColor = "#FF9999";
        document.forms['myForm']['confirm'].onclick = function() {
            document.forms['myForm']['confirm'].style.backgroundColor = "";
        }
    }
    if (!(confirm === password)) {
        valid = false;
        alertMessages.push("Password confirmation does not match!");
        document.forms['myForm']['confirm'].style.backgroundColor = "#FF9999";
        document.forms['myForm']['confirm'].onclick = function() {
            document.forms['myForm']['confirm'].style.backgroundColor = "";
        }
    }

    console.log(alertMessages);

    return valid;


    //document.forms['myForm']['username'].style.backgroundColor = "#FF9999";

    //if (valid) {
      //
    //} else {

    //}
}
//console.log(getClasses(document.getElementById("id1")));