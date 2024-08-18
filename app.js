$(document).ready(function() {


    // Terminal border animations
       function borderAnimationFunction()
       {
        const lines = document.querySelectorAll(".line");

        lines.forEach((line, index) => {
            line.addEventListener("animationend", function() {
                if (index === lines.length - 1) {
                    lines.forEach(line => line.style.display = 'none');
                    document.getElementById("terminal-container").style.border = "1px solid green";
                    document.querySelector(".terminal--content").style.opacity = 1;
                    document.getElementById("terminal-container").style.borderRadius = "12px";
                    document.getElementById("terminal-container").style.overflowY = "auto";
                    document.getElementById("terminal").style.display = "block";
                }
            });
        });
       }

    // message function
   function tittleMessage(callback)
   {
    let message = document.getElementById("message");
    message.style.opacity = 1;
    message.style.direction = "block";
    setTimeout(() => {
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.display = "none"
        }, 1000);
    }, 2500);
    callback();
   }

   tittleMessage(borderAnimationFunction)
});
