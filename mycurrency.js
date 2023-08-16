var currentBox="myDropdown1";
const options = {  hour12: false };
const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
var localTime = new Date().toLocaleTimeString('en-US', options).slice(0,5);
document.getElementById("time").innerText=localTime;
const localDate = new Date().toLocaleDateString('en-US', options2);
document.getElementById("date").innerText=localDate

setInterval(function() {
    localTime = new Date().toLocaleTimeString('en-US', options).slice(0,5);
    document.getElementById("time").innerText=localTime
}, 60 * 1000);

var boxes=document.querySelectorAll(".dropdown>input");
boxes.forEach(e => {   
    e.addEventListener("click", function b(){opendrops(this.id)});
});
window.onclick = function(event) {
    if (!event.target.matches(".dropdown>input") && !event.target.matches('.dropbtn') && !event.target.matches('a') && !event.target.matches(".dropbtn"))  {
        closedrops(currentBox)
        if (document.getElementById("myDropdown").classList.contains('show')){
            document.getElementById("myDropdown").classList.remove('show');
        }
    }
}
function opendrops(a){
    if (document.getElementById("myDropdown").classList.contains('show')){
        document.getElementById("myDropdown").classList.remove('show');
    }
    document.getElementById(a).value="";
    s = "myDropdown"+a;
    document.getElementById(s).classList.toggle("show");
    currentBox=s
    boxes.forEach(b => {
        if(a!=b.id){
            x="myDropdown"+b.id;
            closedrops(x)
        }
    })   
}
function closedrops(a){
    var dropdown = document.getElementById(a);
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
    
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    closedrops(currentBox)
}

const endpoint = 'https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_7vPRfYrukGDKvWJoBneoQipOrHX2uJrqDqLyw8bZ';
var amountInput=0;
var curr1="USD";
var curr2="NGN";
var countries=[];
var currencies=[];
const sourceCurrencySelect = document.getElementById('myDropdown1');
const targetCurrencySelect = document.getElementById('myDropdown2');


// Fetch available currencies and populate the dropdowns
addEventListener("DOMContentLoaded", () => {
    fetch("https://v6.exchangerate-api.com/v6/031a25862cfe908c2b037edd/codes")
        .then(response => response.json() )
        .then(data => {
            data.supported_codes.forEach(d=>{
                countries.push(d)
                currencies.push(d[0])
            })
            currencies.forEach(currency => {
                const sourceOption = document.createElement('a');
                const targetOption = document.createElement('a');
                sourceOption.classList.add("1");
                targetOption.classList.add("2");
                sourceOption.textContent = targetOption.textContent = currency;
                sourceCurrencySelect.appendChild(sourceOption);
                targetCurrencySelect.appendChild(targetOption);
                sourceOption.addEventListener("click", ()=>{ fillBox(sourceOption.innerHTML, 1)})
                targetOption.addEventListener("click", ()=>{fillBox(targetOption.innerHTML, 2)})
                document.getElementById("loader").style.display="none"
                document.querySelector(".main").style.display="flex"
            });
        })
        .catch(error =>{
            console.error('Error fetching currencies:', error)
            document.getElementById("loader").style.display="none"
            document.querySelector(".error").style.display="flex";
            document.querySelector(".error").innerHTML="Network Error, Failed to fetch Currrency Data. Check your connection and try again.";
        });
});
function fillBox(e, a){
    if(document.getElementById("destination").value!="0"){
        document.getElementById("destination").value=""
    }
    if(a==1){
        document.getElementById(a).value=e;
        var b = "#rate"+String(a)+">p";
        document.querySelector(b).innerHTML=e;
        curr1=e;
        buttonState();
        closedrops(currentBox);
        setNames(curr1, curr2);
    }
    if(a==2){
        document.getElementById(a).value=e;
        curr2=e;
        var b = "#rate"+String(a)+">p";
        document.querySelector(b).innerHTML=e;
        buttonState()
        closedrops(currentBox);
        setNames(curr1, curr2);
    }
}

document.getElementById("source").addEventListener("keyup",  ()=>{ 
    document.getElementById("destination").value="";
    buttonState()
})
document.getElementById("source").addEventListener("click", ()=>{
    if(document.getElementById("source").value=="0"){
        document.getElementById("source").value=""
    }
    buttonState()
})
function buttonState(){
    if (document.getElementById("source").value.length>0 && document.getElementById("source").value>0 && curr1!=curr2){
        document.querySelector("button").classList.remove("disabled")
        document.querySelector("button").disabled=false;
    }
    else{
        if(!document.querySelector("button").classList.contains("disabled")){
            document.querySelector("button").classList.add("disabled")
        }
        document.querySelector("button").disabled=true;
    }
}
if(amountInput==0){
    document.getElementById("destination").value="0"
}



document.querySelector("button").addEventListener("click",()=>{
    document.querySelector("button").classList.add("disabled")
    document.querySelector("button").disabled=true;
    amountInput=document.getElementById("source").value;
    setNames(curr1, curr2);
    const endpoint2=`https://v6.exchangerate-api.com/v6/031a25862cfe908c2b037edd/pair/${curr1}/${curr2}`;
    fetch(endpoint2)
    .then(response => response.json() )
    .then(data => {
        cr=data.conversion_rate;
        final= amountInput*cr;
        document.getElementById("destination").value=final.toFixed(2);
    })
})

function setNames(a,b){
    for (var i=0; i<162; i++){
        if(countries[i][0] == a){
            document.getElementById("s1").innerHTML=countries[i][1]
        }
        if(countries[i][0] == b){
            document.getElementById("s2").innerHTML=countries[i][1]
        }
    }
}

document.querySelectorAll("#myDropdown>a").forEach(e=>{
    e.addEventListener("click",(event)=>{
        var x = event.target.innerHTML
        curr1=x.slice(0,3)
        curr2=x.slice(7,10)
        fillBox(curr1, 1)
        fillBox(curr2, 2)
        setNames(curr1, curr2);
        if (document.getElementById("myDropdown").classList.contains('show')){
            document.getElementById("myDropdown").classList.remove('show');
        }
    })
})

document.getElementById("1").addEventListener("keyup", (event) => {
    filterFunction(event);
  });
document.getElementById("2").addEventListener("keyup", (event) => {
    filterFunction(event);
  });

function filterFunction(e) {
    //console.log(e.target.id);
    var input, filter, ul, li, a, i;
    input = document.getElementById(e.target.id);
    filter = input.value.toUpperCase();
    x="myDropdown"+e.target.id
    div = document.getElementById(x);
    a = div.querySelectorAll("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }