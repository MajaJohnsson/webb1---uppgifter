//uppgift 3.2.5, program för animerad navigationslist med drop-down meny

let btn = document.getElementById('btn');
const block = "block";
const none = "none";

function start(displayValue) {
    //AI användes för att hämta ut varje individuellt "barn" till menu för att kunna kontrollera att de visas stegvis
    let menuContent = document.querySelectorAll(".menu p");
    
    let show = 0;
    let hide = 2;

    let interval = setInterval(animation, 100);
    
    function animation() {
        if (displayValue == block) {
            if (show == menuContent.length) {
                clearInterval(interval);
                    
            } else {
                menuContent[show].style.display = displayValue;
                //AI användes för att ta reda på vilka alternativ det finns på transform
                menuContent[show].animate(
                    [
                        {transform: "translateX(-100px)"},
                        {transform: "translateX(0)"}
                    ],
                    {
                        duration: 300
                    }
                );
                show++;
            }
        } else {
            if (hide == -1) {
                clearInterval(interval);
                    
            } else {
                menuContent[hide].style.display = displayValue;
                hide--;
            }
        }
    }
}


//för att dropdown menyn inte ska synas vid laddning av sida
window.onload = function() {
    let menuContent = document.getElementsByClassName("menu");
    
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = none;
    }
}

//för att dropdown menyns "barn" inte ska synas vid laddning av sida
window.onload = function() {
    let menuContent = document.querySelectorAll(".menu p");
    
    for (i = 0; i < menuContent.length; i++) {
        menuContent[i].style.display = none;
    }
}

//kallar på metod för att visa dropdownmeny
btn.addEventListener("mouseover", function() {

    start(block);

});

//döljer dropdown menyn
btn.addEventListener("mouseout", function() {
    start(none);

});