const toggle = document.querySelector(".toggle");
const nav_bar_list = document.querySelector(".nav_bar_list");

function toggleMobileMenu() {
    if (nav_bar_list.classList.contains("active")) {
        nav_bar_list.classList.remove("active");
        return;
    }
    nav_bar_list.classList.add("active");
}

function showHide(elemToShow, elemToHide) {
    for (var i = 0; i < elemToShow.length; i++) {
        var classElems = document.getElementsByClassName(elemToShow[i]);
        for (var j = 0; j < classElems.length; j++) {
            classElems[j].style.display = "grid";
        }
    }
    for (var i = 0; i < elemToHide.length; i++) {
        var classElems = document.getElementsByClassName(elemToHide[i]);
        for (var j = 0; j < classElems.length; j++) {
            classElems[j].style.display = "none";
        }
    }
}

function addHighlight(mainElem) {
    if (!mainElem.classList.contains("highlight")) {
        var otherHighlights = document.getElementsByClassName("highlight");
        for (var i = 0; i < otherHighlights.length; i++) {
            otherHighlights[i].classList.remove("highlight");
        }
        mainElem.classList.add("highlight");
    }
}

toggle.addEventListener("click", toggleMobileMenu, false); 

$(document).ready(function() {
    $("#web-filter").click(function() {
        addHighlight(this);
        showHide(["web-proj"],["terminal"]);
    });
    
    $("#all-filter").click(function() {
        addHighlight(this);
        showHide(["web-proj", "terminal"],[]);
    });
    
    $("#terminal-filter").click(function() {
        addHighlight(this);
        showHide(["terminal"],["web-proj"]);
    });
    
    $("#email-btn").click(function() {
       window.location.href = 'mailto:test@gmail.com';
    });
    
    $(".fa-linkedin").click(function() {
       var redirectWindow = window.open('https://www.linkedin.com/in/nmaldonado4', '_blank');
        redirectWindow.location;
    });
    
    $("#main-git").click(function() {
        var redirectWindow = window.open('https://github.com/nicholemaldonado4', '_blank');
        redirectWindow.location;
    });
});