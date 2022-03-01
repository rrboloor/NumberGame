const startbtn=document.getElementById("startbtn")
const userinput=document.getElementById("userinput")
const submitbtn= document.getElementById('submit')
const logarea=document.getElementById("logarea")
const loglist=document.getElementById("loglist")
const restartbtn=document.getElementById("restart")
var initialNumber = Math.floor(Math.random() *1000)+1
var isGameStarted =false;
var intUserInput=0;
var countMatches;
var countPosMatch;


function setRandomNumber() {

    do {
        initialNumber = Math.floor(Math.random() *1000)+1
    }
    while(initialNumber <100 )
}

function gameStart() {


    setRandomNumber()
    isGameStarted=true;
    userinput.value='';
    toastEl = document.getElementById('startTst')
    bsToast = new bootstrap.Toast(toastEl)
    bsToast.show()
}


function keepLogs() {

    newEntry=document.createElement("li")
    let curText=userinput.value + "--" + "Position Match: " + countPosMatch + "  ,and  " + "digits Match: " + countMatches; 
    console.log(curText)
    intUserInput=parseInt(curText);
    if(isNaN(intUserInput)) {
        alert("Not a Number retry");
        userinput.value="";
        return;
    }
    newEntry.appendChild(document.createTextNode(curText))

    loglist.appendChild(newEntry)
}

function clearLogs() {

    loglist.innerHTML="";
}


function checkAnswer() {


    if(isGameStarted) {
        if(parseInt(userinput.value) === initialNumber)  {
            return alert("Congratualations")
        }

    }
    countMatches=0;
    countPosMatch=0;
    var sUserGuess=(userinput.value)
    /* game started*/
    // Check how many positions match..
    // Split the number into 3 parts.
    // var onesPos= userGuess%10 ;
    // var tensPos= Math.floor(userGuess/10)%10;

    // var hunPos = Math.floor(userGuess/100)%10

    // console.log(onesPos +" " + tensPos + " " + hunPos)

    // if(onePos.toString()in initialNumber.toString()) {}
    countMatches=0;
    countPosMatch=0;
  
   var sOne=sUserGuess.split('')[0];
   var sTen=sUserGuess.split('')[1]
   var sHun=sUserGuess.split('')[2]
    var aInitialNumber = initialNumber.toString().split('')
    var aUserGuess=sUserGuess.split('')  

    for(let i=0; i<3 ; i++) {
        for(let j=0; j<3 ; j++) {
            if(aUserGuess[i] == aInitialNumber[j] ){
                
                if(i==j) {
                    countPosMatch+=1;
                    if(countMatches >0 ) {
                    countMatches=countMatches-1;
                    }
                    
                }
                else {
                    countMatches+=1;
                }
            }
        }
    }
   console.log("position Match :" + countPosMatch+ " and digit match :" + countMatches)
}

startbtn.addEventListener('click',(ev)=> {console.log("Button Clicked"); gameStart()
})
submitbtn.addEventListener("click",(ev)=> {console.log("Submit button clicked"); checkAnswer(); keepLogs()})
restartbtn.addEventListener("click",()=> {
    clearLogs();
    alert("Correct Answer is:  " + initialNumber)
})

userinput.addEventListener("keyup" , (event)=> {
    if(event.key === 'Enter') {
        event.preventDefault();
        submitbtn.click()
    }
})
