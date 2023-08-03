currentRow=0;
currentColumn=0;
currentString=""
var todaysWordle
var g=0
var keyList = document.querySelectorAll(".key");

//
// Anonymous "self-invoking" function



const API_URL = "https://api.datamuse.com/words?sp=?????";
const wordLength = 5;

async function getRandomWord() {
  const response = await fetch(API_URL.replace("?????", "?".repeat(wordLength)));
  const data = await response.json();
  if (data.length > 0) {
    const randomWord = data[Math.floor(Math.random() * data.length)].word;
    return randomWord;
  } else {
    throw new Error("No word found.");
  }
}

getRandomWord()
  .then((word) => todaysWordle = word.toUpperCase())
  .catch((error) => alert(error));


//const API_URL2 = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

const API_URL2 = "https://api.dictionaryapi.dev/api/v2/entries/en/"
async function isValidWord(word) {
  const response = await fetch(`${API_URL2}${word}`);
  const data = await response.json();
  //return Array.isArray(data) && data.length!=20;
  return Array.isArray(data);
  }

function enterOperation(a){
  if(a){
    temp=todaysWordle;
    for(var i=0; i<5; i++){
      if (temp.includes(currentString[i])){
        if(temp[i]==currentString[i]){
          document.getElementById(currentString[i]).style.backgroundColor="green";
          document.getElementById(currentString[i]).classList.add('inactive');
          var pos = String(currentRow)+String(i);
          document.getElementById(pos).style.backgroundColor="green";
          g=g+1;
        }
        else{
          if(document.getElementById(currentString[i]).classList.length ==1){
            document.getElementById(currentString[i]).style.backgroundColor="orange";
            document.getElementById(currentString[i]).classList.add('inactive');
          }
          var pos = String(currentRow)+String(i);
          document.getElementById(pos).style.backgroundColor="orange";
        }
        temp= temp.replace(currentString[i], "-");
      }
      else{
        if(document.getElementById(currentString[i]).classList.length ==1){
          document.getElementById(currentString[i]).style.backgroundColor="grey";
        }
        var pos = String(currentRow)+String(i);
        document.getElementById(pos).style.backgroundColor="grey";
      }
    }

  }
  else{
    for(var j=0; j<5; j++){
      b=String(currentRow)+String(j);
      document.getElementById(b).innerHTML="";
    }
    alert(currentString+" is not a Valid word in the English Dictionary");
    currentString="";
    currentColumn=0;
    currentRow=currentRow-1;
  }
  if(g==5){
    document.querySelector("h5").innerHTML="CONGRATULATIONS";
    document.querySelector("#wol").innerHTML="YOU WON";
    document.querySelector("#tdw").innerHTML="THE WORDLE WAS "+todaysWordle;
    document.getElementById("mBn").click();
    for(var i=0; i<28; i++) {
      keyList[i].style.pointerEvents="none";
    }
  }
  currentString="";
  currentRow=currentRow+1;
  if(currentRow>5 && g!=5){
    document.querySelector("h5").innerHTML="GAME OVER";
    document.querySelector("#wol").innerHTML="YOU LOST";
    document.querySelector("#tdw").innerHTML="Sorry, today's wordle was "+todaysWordle;
    document.getElementById("mBn").click();
  }
  currentColumn=0;
  g=0;
}

if(currentRow<=5){
  for(var i=0; i<28; i++) {
    keyList[i].addEventListener("click", function b(){type(this.id)});
  }


  //What the script does when each key cell is clicked
  function type(a){
    if (a!="Enter" && a!="Delete"){
      if (currentColumn<=4){
        c=String(currentRow)+String(currentColumn);
        document.getElementById(c).innerHTML=a;
        currentString=currentString+a;
        currentColumn=currentColumn+1;
      }
    }
    if(a=="Enter"){
      if (currentColumn==5){
        document.getElementById(a).style.pointerEvents="none";
        isValidWord(currentString)
          .then((isValid) => { 
              enterOperation(isValid);
              document.getElementById(a).style.pointerEvents="auto"; 
          })
          .catch((error) => alert(error));
      }   
    }
    if (a=="Delete"){
      if (currentColumn>0){
        currentColumn=currentColumn-1;
        c=String(currentRow)+String(currentColumn);
        v=document.getElementById(c).innerHTML;
        currentString=currentString.slice(0,currentColumn);
        document.getElementById(c).innerHTML="";
      }  
    }
  }
}
document.getElementById("restart").addEventListener("click",()=>{
  currentRow=0;
  currentColumn=0;
  currentString="";
  g=0;
  getRandomWord()
    .then((word) => todaysWordle = word.toUpperCase())
    .catch((error) => alert(error));

  for(var i=0; i<28; i++) {
      keyList[i].style.pointerEvents="auto";
      keyList[i].classList.remove("inactive");
      keyList[i].style.backgroundColor="lightgray";
    }
  bl=document.querySelectorAll('.column');
  bl.forEach(box => {
        box.innerHTML="";
        box.style.backgroundColor="white";
  });
  document.getElementById("clz").click()
  })

