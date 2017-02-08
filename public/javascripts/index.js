var socket = io("127.0.0.1:8000");
$(document).ready(function(){
    socket.on("msgReceived", function(msg){
        displayReceivedMsg(msg);
    });
    $("#userInput").on("keydown", onKeyPressed);
});

function onKeyPressed(event) {
    switch(event.keyCode) {
        case 13:
            enterPressed();
            break;
        default:
            break;
    }
}

function enterPressed() {
    socket.emit("msgSent", { msg: getUserInput() });
    $("#messageBox").append(`<div class="msg">` + getUserInput() + `</div><br />`);
    clearInput();
}

function displayReceivedMsg(msg) {
    $("#messageBox").append(`<div class="msg">` + msg + `</div><br />`);
}

function getUserInput() {
    return $("#userInput").val();
}

function clearInput() {
    $("#userInput").val("");
}