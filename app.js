var bill=document.querySelector("#bill-amt")
var cash=document.querySelector("#cash-given")
var btn=document.querySelector(#btn)

url_server="https://api.funtranslations.com/translate/minion.json"
function gettranslation(input){
    return url_server+"?"+"text="+input
}

btn.addEventListener("click",function clickEventHandler(){
    var input1=bill.value
    var input2=cash.value
    if (cash>bill) && (bill.isInteger()){
        back=cash-bill
        notes=[2000, 500, 100, 20, 10, 5, 1]
        while(back<=0){
            for (i=0;i<notes.length;i++ ){
                amt=back/notes[i]
                console.log(amt)
                back=back%notes[i]
                console.log(back)

            }
        }
    }
    else{
        alert("Invalid Amount given. ")
    }
    // fetch(gettranslation(input))
    //     .then(response => response.json())
    //     .then(json=>{
    //         outtxt.innerText=json.contents.translated})
    //     .catch(function errorHandler(error){
    //         console.log("Server Error.")
    //         alert("Server error!")
    //     })
})