var currentBox="myDropdown1";
var boxes=document.querySelectorAll("input");
boxes.forEach(e => {   
    e.addEventListener("click", function b(){opendrops(this.id)});
});
window.onclick = function(event) {
    if (!event.target.matches(".dropdown>input") && !event.target.matches('.dropbtn')) {
        closedrops(currentBox)
        if (document.getElementById("myDropdown").classList.contains('show')){
            document.getElementById("myDropdown").classList.remove('show');
        }
    }
}
function opendrops(a){
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