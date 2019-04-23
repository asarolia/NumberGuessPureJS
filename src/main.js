'use strict';

var randomNumber = Math.floor(Math.random()*Math.floor(100));  // get the random number
console.log(randomNumber);

var failRespArray = [];

  function main(){
            //   alert("test");

            var options = {
            strings: ["<p>Do you love <strong>numbers?</strong></p>",
                    "<p>Do you have strong <strong> number sense?</strong></p>",
                    "<p>Do you have in you <strong>to guess right number?</strong></p>",
                "<p>Take the challenge and <button id=\"startgame\" onclick=\"start()\" type=\"submit\" class=\"btn btn-primary mb-2\">Start Game</button></p>"],
            typeSpeed: 40,
            smartBackspace: true,
            showCursor: false
        
    }
            var elem = document.getElementById('typed');

            var typed = new Typed(elem, options);

            // attach generic click event
            var btnArray = document.getElementsByTagName('button');

            for (let i = 0 ; i < btnArray.length ; i++)
            {
                btnArray[i].addEventListener('click', validateInput);
            }

            
    }

    function start()
    {
      //  alert("test");
      let spanElem = document.getElementById('typed');
      spanElem.style.display = 'none';

      // enable form box

      let formElem = document.getElementById('inputbox');
      formElem.style.display = 'block';
    }
            

    function validateInput(){
       // alert("test");

       // get user input

       let numberValue = document.getElementById('inputNumber');

       // enable message box

       let successMsg = document.getElementById('succcessMessageBox');
       let failMsg = document.getElementById('failMessageBox');

       if(randomNumber === Number.parseInt(numberValue.innerText))
       {


       }else{
           // append to failure store array
           failRespArray.push(Number.parseInt(numberValue.innerText));
           showfailMessage(failRespArray);
       }

       successMsg.style.display = 'block';

       // stop by default sumbit propogation to stay on page
       event.preventDefault(); 


    }

    function showfailMessage(...args){
        
    }