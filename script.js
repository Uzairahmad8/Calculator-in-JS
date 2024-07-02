document.addEventListener("DOMContentLoaded", function(){
    const displayContainer = document.querySelector(".calc-display");
    const buttons = document.querySelectorAll(".btn");

    let total = "0"; // to store current input
    displayContainer.innerText = total;


    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            displayNumber(e.target.innerText); // pass the content of button as argument
        })
    })


    // function to display content
    function displayNumber(e) {
        // check for cases

        if (e === "RESET") {
            total = "0";
            
        }
        else if (e === "DEL") {
            if (total.length > 1) {
               total = total.slice(0, -1); // get the string from 0th index till last (except last index);
            } else {
                total = "";
                displayContainer.innerText = "0";
            }
        } else if (e === "=") {
            total = eval(total).toString();
        } else {

            // if last input is operator and user again enter any operator then do nothing
            if ((e === "+" ||
                e === "*" ||
                e === "/" ||
                e === "-" ) && 
                (total[total.length - 1] === "+" ||
                total[total.length - 1] === "*" ||
                total[total.length - 1] === "/" ||
                total[total.length - 1] === "-")
             ) {
                // do noting
             } else {
                // if the first input is entered, then remove 0 from displayContainer.innerText.
                if (displayContainer.innerText === "0") {
                    displayContainer.innerText = e;
                    total = e;
                } else {
                    displayContainer.innerText += e;
                }
                
                
            }
            
            
        }
        
        total = displayContainer.innerText;
        displayContainer.innerText = total; 

    } 
});