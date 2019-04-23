'use strict';

  function main(){
            //   alert("test");

            var options = {
            strings: ["<p>Do you love <strong>numbers?</strong></p>",
                    "<p>Do you have strong <strong> number sense?</strong></p>",
                    "<p>Do you have in you <strong>to guess right number?</strong></p>",
                "<p>Take the challenge and <button id=\"startgame\" type=\"submit\" class=\"btn btn-primary mb-2\">Start Game</button></p>"],
            typeSpeed: 40,
            smartBackspace: true,
            showCursor: false
        
    }
            var elem = document.getElementById('typed');

            var typed = new Typed(elem, options);

            // attach event listener for button

            let buttonsArray = document.getElementsByTagName('button');

            

    }

            