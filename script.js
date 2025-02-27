window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
   elemekelerese4();
   elemekformazasa1();
});

function elemekElerese1() {
    const Elem =document.querySelectorAll("section h2")[0]
    document.getElementById("f1")
    let tartalom = Elem.innerHTML
    console.log(tartalom);

}


function elemekElerese2() {
    const Elem=document.querySelectorAll("#ide")[0]
    Elem.innerHTML="<p>Jó reggelt</p>"
    let szoveg = Elem.innerHTML
    console.log(szoveg)

}


function elemekElerese3() {
    const Elem=document.ELEM=document.querySelectorAll(".ide")[0]
    Elem.innerHTML +="<p>Jó reggelt</p>"
    let ideszoveg = Elem.innerHTML
    console.log(ideszoveg)
}

function elemekelerese4(){
    let txt = "<ul>"
    const Elem=document.getElementsByClassName("lista")[0]
    for (let index = 0; index < 5; index++) {
        let szam =  (Math.random()*21) + 10
        txt +=`<li> ${Math.floor(szam)}</li>`
        
        
    }
    txt += "</ul>"
    Elem.innerHTML = txt 
}

function elemekformazasa1(){
    const Elem=document.getElementsByClassName("lista")[0];
    Elem.classList.add("formazott")
    Elem.innerHTML = " ";


}