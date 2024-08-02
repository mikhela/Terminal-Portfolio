$(document).ready(function() {
    setTimeout(() => {
        $('#aboutBtn').text('About: Click');
    }, 3000);
   
})

$('#aboutBtn').on('click', function() {
    let aboutDiv = $('.about');
    if (aboutDiv.is(':hidden')) {
        aboutDiv.html(`
            <ul>
                <li>Name: Giorgi</li>
                <li>Surname: Omanadze</li>
                <li>Live: Tbilisi</li>
            </ul>
        `).slideDown();
    } else {
        aboutDiv.slideUp();
    }

    $(this).text('About:');
});

$('#mailbtn').on("click", function(){
    let maildiv = $(".mail");
    if (maildiv.is(':hidden')) {
        maildiv.html(`
            <li>omanadzOfficial@gmail.com</li>
        `).slideDown();
    } else {
        maildiv.slideUp();
    }
})


//terminal border animations 

document.addEventListener("DOMContentLoaded", function() {
    const terminal = document.querySelector("#terminal-container");
    const lines = document.querySelectorAll(".line");
    
    lines[3].addEventListener("animationend", function() {
        terminal.style.display = "block";
    });
});


function removeLines()
{
    setTimeout(() => {
        let terminal = document.getElementById("terminal-container")
        terminal.style.border = "1px solid green" 
    }, 25000);
    setTimeout(() => {
        let lines = document.querySelectorAll(".line")
        lines.forEach(line => {
            line.style.display = "none"
        })

    }, 25500);
    setTimeout(() => {
        let terminalopacity = document.querySelector(".terminal--content")
        terminalopacity.style.opacity = 1;
    }, 5000);
}

removeLines()