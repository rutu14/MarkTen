var bill=document.querySelector("#bill-amt")
var cash=document.querySelector("#cash-given")
var btn=document.querySelector("#btn")
var noofnote=document.querySelectorAll(".notes")

btn.addEventListener("click",function clickEventHandler(){
    var input1=bill.value
    console.log("bill:"+input1)
    var input2=cash.value
    console.log("cash:"+input2)
    if (input2>input1 && input1>0){
        back=input2-input1
        console.log("baln"+back)}
    else{
        alert("Invalid Amount given. ")
        }
    notes=[2000, 500, 100, 20, 10, 5, 1]
    var bt=[]
    while(back!=0){
            for (i=0;i<notes.length;i++ ){
                console.log("notes"+notes[i])
                amt=Math.floor(back/notes[i])
                bt[i]=amt
                console.log("qt"+amt)
                rem=back%notes[i]
                console.log("re"+rem)
                back=back-(notes[i]*amt)
                noofnote[i].innerText=bt[i]
                }
            }
      }
    
)