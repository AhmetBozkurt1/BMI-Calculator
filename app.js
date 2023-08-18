let valueSonuc=document.querySelector(".value")
let categoryText=document.querySelector(".category-text")
let categoryIcon=document.querySelector("#category-icon")

let selectKg=document.getElementById("selectKg")
let selectKgText=document.getElementById("selectKg-text")

let selectBoy=document.getElementById("selectBoy")
let selectBoyText=document.getElementById("selectBoy-text")



let bmi;
function calculate(){
    let nowKg=parseFloat(selectKg.value)
    selectKgText.innerHTML=`${nowKg} kg`
    let nowBoy=parseFloat(selectBoy.value)
    selectBoyText.innerHTML=`${nowBoy} cm`
    bmi=(nowKg/(Math.pow((nowBoy/100),2))).toFixed(1)
}
document.querySelector(".hesapBtn").addEventListener("click",function(){
    calculate()
    valueSonuc.innerHTML=bmi
    let bmiSonuc=valueSonuc.innerHTML
    if(bmiSonuc<18.5){
        categoryText.innerHTML="Below Ideal Weight"
        categoryIcon.classList=[]
        categoryIcon.classList.add("bi-emoji-angry-fill")
        categoryIcon.style.color="#F94C10"
    }
    else if(bmiSonuc<24.9){
        categoryText.innerHTML="Normal Weight"
        categoryIcon.classList=[]
        categoryIcon.classList.add("bi-emoji-smile-fill")
        categoryIcon.style.color="green"
    }
    else if(bmiSonuc<29.9){
        categoryText.innerHTML="Above Ideal Weight"
        categoryIcon.classList=[]
        categoryIcon.classList.add("bi-emoji-expressionless-fill")
        categoryIcon.style.color="#C70039"
    }
    else if(bmiSonuc<39.9){
        categoryText.innerHTML="Well Above Ideal Weight(Obese)"
        categoryIcon.classList=[]
        categoryIcon.classList.add("bi-emoji-frown-fill")
        categoryIcon.style.color="#C51605"
    }
    else if(bmiSonuc>=40){
        categoryText.innerHTML="Well Above Ideal Weight(Morbidly Obese)"
        categoryText.style.fontSize="23px"
        categoryIcon.classList=[]
        categoryIcon.classList.add("bi-emoji-dizzy-fill")
        categoryIcon.style.color="#3E001F"
        categoryIcon.style.fontSize="23px"
    }
    else{
        // bmiSonuc.innerHTML=""
        let result=document.querySelector(".result")
        let resultBox=document.querySelector(".resultBox")
        resultBox.style.display="none"
        result.innerHTML+=`
            <p class="hata">Hatalı Giriş Yaptınız.Tekrar Deneyiniz...</p>
        `
    }
})







