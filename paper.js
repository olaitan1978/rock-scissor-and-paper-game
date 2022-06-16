let button = document.querySelectorAll("button")
let userChoice= document.getElementById("use")
let computerChoice= document.getElementById("com")
let reso= document.getElementById("res")
let resom= document.getElementById("out")

let user
let compy
let count= 0
let count1= 0
button.forEach(bur=>{
    bur.addEventListener("click",(e)=>{
       user= e.target.id
       userChoice.innerHTML=user
       computer()
       result()
       lolo()
    })
})

function computer(){
    let rand= (Math.floor(Math.random()*3))+1
    if (rand===1){
        compy="rock"
    }else if(rand===2){
        compy="paper"
    }else{
        compy="scissors"
    }
    computerChoice.innerHTML=compy
}

function result(){
    let outy= document.getElementById("jimmy").value
    if(compy===user){
        reso.innerHTML="it is draw &#128512"
    }else if (compy==="rock" && user==="paper"){
        reso.innerHTML="you have won "
        count++
    }else if (compy==="rock" && user==="scissors"){
        reso.innerHTML="computer has won "
        count1++
    }else if (compy==="paper" && user==="rock"){
        reso.innerHTML="computer has won "
        count1++

    }else if (compy==="paper" && user==="scissors"){
        reso.innerHTML="you have won "
        count++

    }else if (compy==="scissors" && user==="rock"){
        reso.innerHTML="you have won "
        count++

    }else if (compy==="scissors" && user==="paper"){
        reso.innerHTML="computer has won "
        count1++

    }else if (user==="rock" && compy==="paper"){
        reso.innerHTML="computer has won "
        count1++

    }else if (user==="rock" && compy==="scissor"){
        reso.innerHTML="you have won "
        count++

    }else if (user==="paper" && compy==="rock"){
        reso.innerHTML="you have won"
        count++

    }else if (user==="paper" && compy==="scissors"){
        reso.innerHTML="computer has won "
        count1++

    }else if (user==="scissor" && compy==="rock"){
        reso.innerHTML="computer has won "
        count1++

    }else if (user==="scissors" && compy==="paper"){
        reso.innerHTML="you have won"
        count++
        console.log(count)

    }
    
resom.innerHTML=`${outy} you have scored ${count} computer has scored ${count1}`
}  

function lolo(){
    count++
    console.log(count)
    if(count==6){
        resom.innerHTML="GAME OVER !!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        return;
    }
}