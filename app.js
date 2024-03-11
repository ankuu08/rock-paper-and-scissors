let div=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userscore=document.querySelector("#you-score");
let compscore=document.querySelector("#comp-score");
let a=0;
let b=0;
let gencomp=()=>{
    let choice=["Rock","Paper","Scissors"];
    let m=Math.floor(Math.random()*3);
    return choice[m]
}
let user=(i)=>{
    console.log("You selected ",i);
}
let draw=()=>{
    console.log("The game is Draw");
    msg.innerHTML="It's a draw.Try Again."
    msg.style.backgroundColor="#081b31"
}
let showwinner=(userwin,i,n)=>{
    if(userwin===false){
        console.log("You lost.");
        console.log(userwin);
        msg.innerHTML=`You lost.${n} beats ${i}.`
        msg.style.backgroundColor="red";
        a++
        compscore.innerText=a;
    }else if(userwin===true){
        console.log("You win.")
        console.log(userwin);
        msg.innerHTML=`You won.${i} beats ${n}.`
        msg.style.backgroundColor="green";
        b++
        userscore.innerText=b;
    }
}
let playgame=(i)=>{
    n=gencomp();
    console.log("Computer selected",n)
    if(i===n){
        draw();
    }else{
        var userwin=true;
        if(i==="Rock"){
            //m=paper & scissors
            // userwin = n === "paper" ? false : true;
            if(n==="Paper"){
                userwin=false;
            }else{
                userwin=true;
            }
        }else if(i==="Paper"){
            //m=rock & Scissors
            // userwin = n === "Scissors" ? false : true;
            if(n==="Scissors"){
                userwin=false;
            }else{
                userwin=true;
            }
        }else{
            //m=rock & paper
            // userwin = n === "rock" ? false : true;
            if(n==="Rock"){
                userwin=false;
            }else{
                userwin=true;
            }
        }
        showwinner(userwin,i,n);
    }
    
}
div.forEach((value)=>{
    value.addEventListener("click",()=>{
        const i=value.getAttribute("id");
        user(i);
        playgame(i);

    })
})