'use strict';


    
var randomNumber = Math.floor(Math.random()*Math.floor(100));  // get the random number
//console.log(randomNumber);
const MAX_CHANCE = 5;

var counter = 0;
var continueProgram = true;



  function main(){
            //   alert("test");

            var options = {
            strings: ["<p>Do you love <strong>numbers?</strong></p>",
                    "<p>Do you have strong <strong> number sense?</strong></p>",
                    "<p>Do you have in you <strong>to guess right number?</strong></p>",
                "<p>Take the challenge, you will get 5 Chances for right guess. If ready, then <button id=\"startgame\" onclick=\"start()\" type=\"submit\" class=\"btn btn-primary mb-2\">Start Game</button></p>"],
            typeSpeed: 40,
            smartBackspace: true,
            showCursor: false
        
    }
            var elem = document.getElementById('typed');

            var typed = new Typed(elem, options);

            // attach generic click event
            // var btnArray = document.getElementsByTagName('button');

            // for (let i = 0 ; i < btnArray.length ; i++)
            // {
            //     btnArray[i].addEventListener('click', validateInput);
            // }

            // form submit handler

            var submitBtn = document.getElementById('submitbtn');
            submitBtn.addEventListener('click',validateInput);


            // restart game handler

            var restartbtn = document.getElementById('restartbtn');
            restartbtn.addEventListener('click',restartGame);

           
            
    }

    function start()
    {
      //  alert("test");
      // disable typed text
     // initializeGlobal();

      let spanElem = document.getElementById('typed');
      spanElem.style.display = 'none';

      // enable form box

      let formElem = document.getElementById('inputbox');
      formElem.style.display = 'block';

      // enable Chance box 
      let chanceBox = document.getElementById('chancebox');
      chanceBox.style.display = 'block';
      let countervalue = document.getElementById('counter');
      countervalue.innerText = MAX_CHANCE;

    }

    function restartGame(){
     //  alert('test');
        randomNumber = Math.floor(Math.random()*Math.floor(100));  // get the random number
//console.log(randomNumber);
        MAX_CHANCE = 5;
        try{
            counter = 0;
        continueProgram = true;

        let spanElem = document.getElementById('typed');
        spanElem.style.display = 'none';
  
        // enable form box
  
        let formElem = document.getElementById('inputbox');
        formElem.style.display = 'block';
  
        // enable Chance box 
        let chanceBox = document.getElementById('chancebox');
        chanceBox.style.display = 'block';
        let countervalue = document.getElementById('counter');
        countervalue.innerText = MAX_CHANCE;

        var restartbtn = document.getElementById('restartbtn');
        restartbtn.style.display = 'none';

        }catch
        {
            console.log("error received"+ error);
            

        } finally{
            event.preventDefault();

        }
        
        
    }
            

    function validateInput()
    {
       // alert("test");

       // get user input

       let numberValue = Number.parseInt(document.getElementById('inputNumber').value);

       if(numberValue != undefined)
       {
           counter += 1;
            
            // get screen display elements
            let successMsg = document.getElementById('succcessMessageBox');
            let failMsg = document.getElementById('failMessageBox');
            
            let hintvalue = document.getElementById('hintbox');

            validateChance();

           // console.log(randomNumber);

            if(randomNumber === numberValue)
            {
                
                showSuccessMsg();
                continueProgram = false;
                enableRestart();


            }else
            {
                // append to failure store array
                failMsg.innerText = failMsg.innerText + " " + numberValue;

                showfailMessage(failMsg.innerText);

                // display chance count

                showMessage('counter',parseInt(MAX_CHANCE-counter,10));

                // display hint message

                let hintmsg = "";

                if (numberValue > randomNumber)
                {
                   hintmsg = "Your guess is on higher side";    
                }
                if (numberValue < randomNumber)
                {
                   hintmsg = "Your guess is on lower side";    
                }
                
                showMessage('hintbox',hintmsg);

                // clear inoput control

                showMessage('inputNumber',"");

            }

       }else
       {
           alert("Enter valid number before submit");
           event.preventDefault();
       }

       validateChance();
        // stop by default sumbit propogation to stay on page
        event.preventDefault(); 



    }

    function showSuccessMsg(){
        let successMsgShow = document.getElementById('succcessMessageBox');
        successMsgShow.innerText = "You Won ! That's a right guess.";
        successMsgShow.style.display = 'block';
    }

    function showfailMessage(msg){

        console.log(msg);

        let failMsgShow = document.getElementById('failMessageBox');

        failMsgShow.innerText = msg;
        failMsgShow.style.display = 'block';

    }

    function showMessage(id,msg){

        let elemShow = document.getElementById(id);

        elemShow.innerText = msg;
        elemShow.style.display = 'block';


    }

    function disableControl(id){

        let elemhide = document.getElementById(id);

        elemhide.setAttribute('disabled','true');

    }

    function validateChance(){
         // Chance check
         if(counter === MAX_CHANCE){
             
            // disable form controls
            disableControl('inputNumber');
            disableControl('submitbtn');



            // display message and restart button
            if(continueProgram)
            {
                showMessage('hintbox',"Sorry !! Please try again.");
                enableRestart();
            }
            



        }

    }

    function enableRestart(){

        
        var restartbtn = document.getElementById('restartbtn');
        restartbtn.style.display = 'block';
    }