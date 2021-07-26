// theme change js
var theme_1 = document.getElementById("theme1");
var theme_2 = document.getElementById("theme2");
var theme_3 = document.getElementById("theme3");

// theme elements
var body = document.getElementsByTagName('body');
var themeDiv = document.getElementsByClassName('themeDiv');
var calcText = document.getElementsByClassName('calc-text');
var divRadio = document.getElementsByClassName('div-radio');
var radioInput = document.getElementsByClassName('radio-input');
var calcScreen = document.getElementsByClassName('calc-screen');
var numbers = document.getElementsByClassName('numbers');
var buttons = document.getElementsByTagName('button');
var resetButton = document.getElementsByClassName('row5_1');
var equalToButton = document.getElementsByClassName('row5_2');
var themeLabel = document.getElementsByClassName('radio');
var delButton = document.getElementsByClassName('del');
//theme1function
function theme1function(){
    body[0].style.backgroundColor = 'hsl(222, 26%, 31%)'; 
    themeDiv[0].style.color = 'white';
    calcText[0].style.color = 'white';
    divRadio[0].style.backgroundColor = 'hsl(223,31%,20%)';
    radioInput[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
    radioInput[1].style.backgroundColor = 'hsl(223,31%,20%)';
    radioInput[2].style.backgroundColor = 'hsl(223,31%,20%)';
    calcScreen[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
    numbers[0].style.backgroundColor = 'hsl(223,31%,20%)';
    resetButton[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
    resetButton[0].style.boxShadow = '0 5px 0px hsl(224, 28%, 35%)';
    resetButton[0].style.color = 'white';
    equalToButton[0].style.backgroundColor = 'hsl(6, 63%, 50%)';
    equalToButton[0].style.boxShadow = '0 5px 0px hsl(6, 70%, 34%)';
    equalToButton[0].style.color = 'white';
    themeLabel[0].style.color = 'white';
    themeLabel[1].style.color = 'white';
    themeLabel[2].style.color = 'white';

    for(i=0; i<=15; i++){
        buttons[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
        buttons[i].style.boxShadow = '0 5px 0px hsl(28, 16%, 65%)';
        buttons[i].style.color = 'hsl(221, 14%, 31%)';
    }

    delButton[0].style.backgroundColor = 'hsl(225, 21%, 49%)';
    delButton[0].style.boxShadow = '0 5px 0px hsl(224, 28%, 35%)';
    delButton[0].style.color = 'white';
    console.log(buttons);   
    console.log(radioInput);  
}

function theme2function(){
    body[0].style.backgroundColor = 'hsl(0, 0%, 90%)'; 
    themeDiv[0].style.color = 'hsl(60, 10%, 19%)';
    calcText[0].style.color = 'hsl(60, 10%, 19%)';
    divRadio[0].style.backgroundColor = 'hsl(0, 5%, 81%)';
    radioInput[0].style.backgroundColor = 'hsl(0, 5%, 81%)';
    radioInput[1].style.backgroundColor = 'hsl(25, 98%, 40%)';
    radioInput[2].style.backgroundColor = 'hsl(0, 5%, 81%)';
    themeLabel[0].style.color = 'hsl(60, 10%, 19%)';
    themeLabel[1].style.color = 'hsl(60, 10%, 19%)';
    themeLabel[2].style.color = 'hsl(60, 10%, 19%)';
    calcScreen[0].style.backgroundColor = 'hsl(0, 0%, 93%)';
    calcScreen[0].style.color = 'hsl(60, 10%, 19%)';
    numbers[0].style.backgroundColor = 'hsl(0, 5%, 81%)';
    resetButton[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
    resetButton[0].style.boxShadow = '0 5px 0px hsl(185, 58%, 25%)';
    resetButton[0].style.color = 'hsl(0, 0, 100%)';
    equalToButton[0].style.backgroundColor = 'hsl(25, 98%, 40%)';
    equalToButton[0].style.boxShadow = '0 5px 0px hsl(25, 99%, 27%)';
    equalToButton[0].style.color = 'white';

    for(i=0; i<=15; i++){
        buttons[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
        buttons[i].style.boxShadow = '0 5px 0px hsl(35, 11%, 61%)';
        buttons[i].style.color = 'hsl(60, 10%, 19%)';
    }

    delButton[0].style.backgroundColor = 'hsl(185, 42%, 37%)';
    delButton[0].style.boxShadow = '0 5px 0px hsl(185, 58%, 25%)';
    delButton[0].style.color = 'white';
    console.log(buttons);   
}

function theme3function(){
    body[0].style.backgroundColor = 'hsl(268, 75%, 9%)'; 
    themeDiv[0].style.color = 'hsl(52, 100%, 62%)';
    calcText[0].style.color = 'hsl(52, 100%, 62%)';
    divRadio[0].style.backgroundColor = 'hsl(268,71%,12%)';
    radioInput[0].style.backgroundColor = 'hsl(268,71%,12%)';
    radioInput[1].style.backgroundColor = 'hsl(268,71%,12%)';
    radioInput[2].style.backgroundColor = 'hsl(176, 100%, 44%)';
    themeLabel[0].style.color = 'hsl(52, 100%, 62%)';
    themeLabel[1].style.color = 'hsl(52, 100%, 62%)';
    themeLabel[2].style.color = 'hsl(52, 100%, 62%)';
    calcScreen[0].style.backgroundColor = 'hsl(268,71%,12%)';
    calcScreen[0].style.color = 'hsl(52, 100%, 62%)';
    numbers[0].style.backgroundColor = 'hsl(268,71%,12%)';
    resetButton[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
    resetButton[0].style.boxShadow = '0 5px 0px hsl(285, 91%, 52%)';
    resetButton[0].style.color = 'white';
    equalToButton[0].style.backgroundColor = 'hsl(176, 100%, 44%)';
    equalToButton[0].style.boxShadow = '0 5px 0px hsl(177, 92%, 70%)';
    equalToButton[0].style.color = 'hsl(198, 20%, 13%)';

    for(i=0; i<=15; i++){
        buttons[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
        buttons[i].style.boxShadow = '0 5px 0px hsl(290, 70%, 36%)';
        buttons[i].style.color = 'hsl(52, 100%, 62%)';
    }

    delButton[0].style.backgroundColor = 'hsl(281, 89%, 26%)';
    delButton[0].style.boxShadow = '0 5px 0px hsl(285, 91%, 52%)';
    delButton[0].style.color = 'white';
    console.log(buttons);  
}

theme_1.addEventListener('click', theme1function);

theme_2.addEventListener('click', theme2function);

theme_3.addEventListener('click', theme3function);
theme1function();