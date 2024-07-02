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
            total = 0;
            displayContainer.innerText = total; 
        }
        else if (e === "DEL") {
            if (displayContainer.innerText.length > 1) {
               total = total.slice(0, -1); // get the string from 0th index till last (except last index);
               displayContainer.innerText = total;
               console.log("Delete button clicked")
            } else {
                displayContainer.innerText = "0";
            }
        } else if (e === "=") {
            total = eval(total);
            displayContainer.innerText = total; 
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
                displayContainer.innerText += e;
                total = displayContainer.innerText;

             }

            
        }
    }




    
})