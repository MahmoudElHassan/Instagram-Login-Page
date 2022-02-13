// SideBar

function openNav() {
    document.getElementById("SideBar").style.width = "250px";
    document.getElementById("footer").style.width = "300px";

}

function CloseNav() {
    document.getElementById("SideBar").style.width = "0px";
    document.getElementById("footer").style.width = "0px";
}

// LiteMode

function LiteMode() {
    document.body.classList.toggle("LiteMode")
}

// FormValidat

function FormValidat() {
    var User = document.getElementById("User").value;
    var Pass = document.getElementById("Pass").value;
    var text = "";

    var error = document.getElementById("error");


    if (User.indexOf("@") == -1) {
        text = "Please inter vailed Username";
        error.innerHTML = text;
        error.style.backgroundColor = "#f6b9b9a2";
        error.style.color = "#a83030";
        error.style.transition = "all is okay";
        error.style.borderRadius = "2px";
        error.style.textAlign = "center";
        error.style.padding = "7px";
        return false;
    } 

    else if (Pass.length < 4 ) {
        text = "Please inter vailed Passward";
        error.innerHTML = text;
        error.style.backgroundColor = "#f6b9b9a2";
        error.style.color = "#a83030";
        error.style.transition = "all is okay";
        error.style.borderRadius = "2px";
        error.style.textAlign = "center";
        error.style.padding = "7px";
        return false;
    } 

    else {
        text = "Wlecome"
        error.innerHTML = text;
        return true;
    }
}


