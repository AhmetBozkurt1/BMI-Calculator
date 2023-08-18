let valueSonuc=document.querySelector(".value")
let categoryText=document.querySelector(".category-text")
let catecoryIcon=document.querySelector(".category-icon")

let selectKg=document.getElementById("selectKg")
let selectKgText=document.getElementById("selectKg-text")

let selectBoy=document.getElementById("selectBoy")
let selectBoyText=document.getElementById("selectBoy-text")


function selectKgAl(){
    let nowKg=selectKg.value
    selectKgText.innerHTML=`${nowKg} kg`
    
    let nowBoy=selectBoy.value
    selectBoyText.innerHTML=`${nowBoy} cm`

    

}

